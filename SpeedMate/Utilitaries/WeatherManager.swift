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

        let temperatureUnit = _TEMPERATURE_UNIT == "Celsius" ? UnitTemperature.celsius : UnitTemperature.fahrenheit
        
        Task {
            do {
                let weather = try await weatherService.weather(for: location)

                DispatchQueue.main.async {
                    self.temperature = weather.currentWeather.temperature.converted(to: temperatureUnit).value
                    self.hasFetchedWeather = true
                }
            } catch {
                print("Error fetching weather: \(error)")
            }
        }
    }
}
