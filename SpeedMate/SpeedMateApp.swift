import SwiftUI

@main
struct SpeedMateApp: App {
    @StateObject var locationManager = LocationManager()
    @StateObject var settings = SettingsModel()
    @StateObject var profile = ProfileModel()
    @StateObject var weatherManager = WeatherManager()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(locationManager)
                .environmentObject(settings)
                .environmentObject(profile)
                .environmentObject(weatherManager)
                .onAppear {
                    if settings.antiWake {
                        UIApplication.shared.isIdleTimerDisabled = true
                    }
                    fetchWeather()
                }
                .onDisappear {
                    UIApplication.shared.isIdleTimerDisabled = false
                }
        }
    }
    
    private func fetchWeather() {
        locationManager.requestInitialLocation { location in
            weatherManager.fetchWeatherOnce(for: location)
        }
    }
}
