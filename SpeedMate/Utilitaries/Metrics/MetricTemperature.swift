import SwiftUI

struct MetricTemperature: Metric {
    var temperature: Double
    
    var icon: String {
        return "thermometer"
    }
    
    func getText(using settings: SettingsModel) -> String {
        return String(format: "%.1f", temperature) + (settings.temperatureUnit == "Celsius" ? "°C" : "°F")
    }
}
