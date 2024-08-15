import SwiftUI
import CoreLocation
import Foundation

enum DragyState {
    case idle
    case running
    case finished
}

class DragyManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    private var locationManager = CLLocationManager()

    @Published var speed: Double = 0.0
    @Published var gForce: Double = 0.0
    @Published var elapsedTime: TimeInterval = 0.0
    @Published var isRunning: Bool = false
    @Published var state: DragyState = .idle

    @Published var vmax: Double = 0.0
    @Published var time0to50: TimeInterval?
    @Published var time0to80: TimeInterval?
    @Published var time0to100: TimeInterval?
    @Published var time0to200: TimeInterval?
    @Published var brakingTime: TimeInterval?

    private var timer: Timer?
    private var lastSpeed: Double = 0.0
    private var lastUpdateTime: Date?
    private var startTime: Date?
    private var vmaxTime: Date?
    private let speedThreshold: Double = 1.0

    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
    }

    func startTracking() {
        locationManager.startUpdatingLocation()
    }

    func stopTracking() {
        locationManager.stopUpdatingLocation()
    }

    func startSession() {
        guard !isRunning else { return }

        isRunning = true
        state = .running
        lastUpdateTime = Date()
        startTime = lastUpdateTime
        lastSpeed = 0.0
        vmax = 0.0
        elapsedTime = 0.0
        resetMetrics()
        timer = Timer.scheduledTimer(withTimeInterval: 0.01, repeats: true) { _ in
            self.updateElapsedTime()
        }
    }

    func stopSession() {
        isRunning = false
        state = .finished
        timer?.invalidate()
        timer = nil
        resetMetrics()
    }

    func resetSession() {
        stopSession()
        state = .idle
    }

    private func resetMetrics() {
        time0to50 = nil
        time0to80 = nil
        time0to100 = nil
        time0to200 = nil
        brakingTime = nil
        gForce = 0.0
        vmax = 0.0
        startTime = nil
        vmaxTime = nil
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else {
            return
        }

        let currentSpeed = convertSpeed(speedUnit: _SPEED_UNIT, speed: location.speed)

        if state == .idle {
            if currentSpeed > speedThreshold {
                return
            }
        }

        if state == .running {
            if currentSpeed > speedThreshold {
                updateMetrics(currentSpeed: location.speed)
                calculateGForce(currentSpeed: location.speed)
                updateElapsedTime()
            } else {
                stopSession()
            }
        }

        speed = location.speed
        lastSpeed = location.speed
        lastUpdateTime = Date()
    }

    private func updateElapsedTime() {
        guard let startTime = startTime else {
            return
        }
        
        elapsedTime = Date().timeIntervalSince(startTime)
    }

    private func updateMetrics(currentSpeed: Double) {
        let speedConverted = convertSpeed(speedUnit: _SPEED_UNIT, speed: currentSpeed)

        if _SPEED_UNIT == "Km/h" {
            updateMetricsForKmH(speedConverted)
        } else {
            updateMetricsForMph(speedConverted)
        }
        if speedConverted > vmax {
            vmax = speedConverted
            vmaxTime = Date()
        }
        if let vmaxTime = vmaxTime, speedConverted < 1 && vmax > 0 {
            brakingTime = Date().timeIntervalSince(vmaxTime)
        }
    }

    private func updateMetricsForKmH(_ speedKmH: Double) {
        if time0to50 == nil && speedKmH >= 50 {
            time0to50 = elapsedTime
        }
        if time0to80 == nil && speedKmH >= 80 {
            time0to80 = elapsedTime
        }
        if time0to100 == nil && speedKmH >= 100 {
            time0to100 = elapsedTime
        }
        if time0to200 == nil && speedKmH >= 200 {
            time0to200 = elapsedTime
        }
    }

    private func updateMetricsForMph(_ speedMph: Double) {
        if time0to50 == nil && speedMph >= 30 {
            time0to50 = elapsedTime
        }
        if time0to80 == nil && speedMph >= 50 {
            time0to80 = elapsedTime
        }
        if time0to100 == nil && speedMph >= 60 {
            time0to100 = elapsedTime
        }
        if time0to200 == nil && speedMph >= 130 {
            time0to200 = elapsedTime
        }
    }

    private func calculateGForce(currentSpeed: Double) {
        guard let lastUpdateTime = lastUpdateTime else {
            return
        }

        let timeDelta = Date().timeIntervalSince(lastUpdateTime)
        let speedDelta = currentSpeed - lastSpeed
        let acceleration = speedDelta / timeDelta

        gForce = acceleration / 9.81
    }
}
