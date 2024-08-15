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
    @Published var gForce: Double = 0.0
    
    private var previousSpeed: Double = 0.0
    private var convertedSpeed: Double = 0.0
    private var previousTime: Date = Date()
    
    private var rideTimer: Timer?
    private var stopTimer: Timer?
    
    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()

        initializeUserDefaults()
    }
    
    private func initializeUserDefaults() {
        DispatchQueue.main.async {
            let defaults = UserDefaults.standard
            if defaults.object(forKey: "odometer") == nil {
                defaults.set(0.0, forKey: "odometer")
            }
            if defaults.object(forKey: "rideTime") == nil {
                defaults.set(0.0, forKey: "rideTime")
            }
            if defaults.object(forKey: "stoppedTime") == nil {
                defaults.set(0.0, forKey: "stoppedTime")
            }
        }
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
        speed = max(0, location.speed)
        maxSpeed = max(speed, maxSpeed)

        convertedSpeed = convertSpeed(speedUnit: _SPEED_UNIT, speed: speed)

        updateGForce()
        updateStart()
        updateTimers()
    }
    
    private func updateGForce() {
        let currentTime = Date()
        let timeDifference = currentTime.timeIntervalSince(previousTime)
        
        if timeDifference > 0 {
            let speedDifference = speed - previousSpeed
            let acceleration = speedDifference / timeDifference
            
            gForce = acceleration / 9.8
            previousSpeed = speed
            previousTime = currentTime
        }
    }
    
    private func updateStart() {
        if !isStarted && convertedSpeed >= Double(_NAVIGATION_STARTING_SPEED) {
            isStarted = true
        }
    }
    
    private func updateTimers() {
        if !isStarted {
            return
        }
        
        if convertedSpeed > 1 {
            if stopTimer != nil {
                stopTimer?.invalidate()
                stopTimer = nil
            }
            
            if rideTimer == nil {
                rideTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
                    guard let self = self else { return }
                    
                    self.rideTime += 1
                    self.totalDistance += self.speed
                    
                    DispatchQueue.main.async {
                        let defaults = UserDefaults.standard
                        let newOdometer = defaults.double(forKey: "odometer") + self.speed
                        let newRideTime = defaults.double(forKey: "rideTime") + 1
                        
                        defaults.set(newOdometer, forKey: "odometer")
                        defaults.set(newRideTime, forKey: "rideTime")
                    }
                }
            }
        } else {
            if rideTimer != nil {
                rideTimer?.invalidate()
                rideTimer = nil
            }
            
            if stopTimer == nil {
                stopTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
                    guard let self = self else { return }
                    
                    self.stoppedTime += 1
                    
                    DispatchQueue.main.async {
                        let defaults = UserDefaults.standard
                        let newStoppedTime = defaults.double(forKey: "stoppedTime") + 1
                        
                        defaults.set(newStoppedTime, forKey: "stoppedTime")
                    }
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
