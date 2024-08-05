import SwiftUI

struct GPSView: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    @EnvironmentObject var weatherManager: WeatherManager
    
    var body: some View {
        NavigationStack {
            VStack {
                Spacer()
                
                CustomGauge(
                    speed: convertSpeed(speedUnit: settings.speedUnit, speed: locationManager.speed),
                    gpsAccuracy: locationManager.gpsAccuracy,
                    temperature: weatherManager.temperature,
                    size: 300
                )
                
                Spacer()
                
                CustomDashboard()
                
                Spacer()
            }
        }
    }
}
