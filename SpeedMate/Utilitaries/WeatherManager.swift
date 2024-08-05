import SwiftUI
import WeatherKit
import CoreLocation

class WeatherManager: ObservableObject {
    @Published var temperature: Double = 0.0
    
    let weatherService = WeatherService.shared
    var hasFetchedWeather = false
    
    func fetchWeatherOnce(for location: CLLocation) {
        guard !hasFetchedWeather else {
            return
        }
        
        Task {
            do {
                let weather = try await weatherService.weather(for: location)
                
                DispatchQueue.main.async {
                    self.temperature = weather.currentWeather.temperature.converted(to: .celsius).value
                    self.hasFetchedWeather = true
                }
            } catch {
                print("Error fetching weather: \(error)")
            }
        }
    }
}
