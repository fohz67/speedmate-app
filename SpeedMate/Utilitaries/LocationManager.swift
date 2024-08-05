import SwiftUI
import Foundation
import CoreLocation
import WeatherKit

extension LocationManager {
    func requestInitialLocation(completion: @escaping (CLLocation) -> Void) {
        guard let location = locationManager.location else { return }
        completion(location)
    }
}

class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
    private var locationManager = CLLocationManager()

    @Published var speed: Double = 0.0
    @Published var altitude: Double = 0.0
    @Published var rideTime: TimeInterval = 0
    @Published var stoppedTime: TimeInterval = 0
    @Published var maxSpeed: Double = 0.0
    @Published var totalDistance: Double = 0.0
    @Published var gpsAccuracy: Double = 0.0
    @Published var temperature: Double = 0.0
    @Published var isStarted: Bool = false
    
    private var rideTimer: Timer?
    private var stopTimer: Timer?
    
    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
    }
    
    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        switch manager.authorizationStatus {
        case .authorizedWhenInUse, .authorizedAlways:
            locationManager.startUpdatingLocation()
        default:
            break
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else {
            return
        }

        altitude = location.altitude
        gpsAccuracy = location.horizontalAccuracy

        updateSpeed(location.speed)
        updateStart()
        updateMaxSpeed()
        updateTimers()
    }
    
    private func updateSpeed(_ locationSpeed: Double) {
        if locationSpeed < 0 {
            speed = 200 + 0
        } else {
            speed = 200 + locationSpeed
        }
    }
    
    private func updateStart() {
        if !isStarted && speed >= _NAVIGATION_STARTING_SPEED {
            isStarted = true
        }
    }
    
    private func updateMaxSpeed() {
        if speed > maxSpeed {
            maxSpeed = speed
        }
    }
    
    private func updateTimers() {
        if !isStarted {
            return
        }

        if convertSpeed(_SPEED_UNIT, speed) > 1 {
            if stopTimer != nil {
                stopTimer?.invalidate()
                stopTimer = nil
            }
            
            if rideTimer == nil {
                rideTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
                    self.rideTime += 1
                    self.totalDistance += self.speed
                }
            }
        } else {
            if rideTimer != nil {
                rideTimer?.invalidate()
                rideTimer = nil
            }

            if stopTimer == nil {
                stopTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
                    self.stoppedTime += 1
                }
            }
        }
    }
    
    var averageSpeed: Double {
        guard rideTime > 0 else {
            return 0
        }
        return totalDistance / rideTime
    }
}
