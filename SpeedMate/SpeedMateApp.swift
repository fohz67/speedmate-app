import SwiftUI

@main
struct SpeedMateApp: App {
    @StateObject var locationManager = LocationManager()
    @StateObject var settings = SettingsModel()
    @StateObject var weatherManager = WeatherManager()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(locationManager)
                .environmentObject(settings)
                .environmentObject(weatherManager)
                .onAppear {
                    UIApplication.shared.isIdleTimerDisabled = true
                    fetchInitialData()
                }
                .onDisappear {
                    UIApplication.shared.isIdleTimerDisabled = false
                }
        }
    }
    
    private func fetchInitialData() {
        locationManager.requestInitialLocation { location in
            weatherManager.fetchWeatherOnce(for: location)
        }
    }
}
