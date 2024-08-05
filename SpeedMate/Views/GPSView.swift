import SwiftUI

struct GPSView: View {
    @StateObject var locationManager = LocationManager()
    @StateObject var weatherManager = WeatherManager()
    @EnvironmentObject var settings: SettingsModel
    
    private func fetchWeather() {
        locationManager.requestInitialLocation { location in
            weatherManager.fetchWeatherOnce(for: location)
        }
    }
    
    var body: some View {
        NavigationStack {
            VStack {
                Spacer()
                
                CustomGauge(
                    speed: convertSpeed(
                        speedUnit: settings.speedUnit,
                        speed: locationManager.speed
                    ),
                    gpsAccuracy: locationManager.gpsAccuracy,
                    temperature: convertTemperature(
                        temperatureUnit: settings.temperatureUnit,
                        temperature: weatherManager.temperature
                    ),
                    size: 300
                )
                
                Spacer()
                
                CustomDashboard()
                
                Spacer()
            }
        }
        .environmentObject(locationManager)
        .environmentObject(weatherManager)
        .onAppear() {
            fetchWeather()
        }
    }
}
