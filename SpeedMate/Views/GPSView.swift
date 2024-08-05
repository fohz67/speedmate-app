import SwiftUI

struct GPSView: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    private var convertSpeed: Double {
        if settings.speedUnit == "Mph" {
            return metersPerSecondToMilesPerHour(locationManager.speed)
        } else {
            return metersPerSecondToKilometersPerHour(locationManager.speed)
        }
    }

    var body: some View {
        NavigationStack {
            VStack {
                Spacer()
                
                CustomGauge(
                    speed: convertSpeed,
                    gpsAccuracy: locationManager.gpsAccuracy,
                    temperature: locationManager.temperature,
                    size: 300
                )
                
                Spacer()
                
                CustomDashboard()
                
                Spacer()
            }
        }
    }
}
