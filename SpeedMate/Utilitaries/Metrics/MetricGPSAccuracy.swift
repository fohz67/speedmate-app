import SwiftUI

struct MetricGPSAccuracy: Metric {
    var gpsAccuracy: Double
    
    var icon: String {
        return "antenna.radiowaves.left.and.right"
    }
    
    func getText(using settings: SettingsModel) -> String {
        if settings.distanceUnit == "Km" {
            return String(format: "%.2f", gpsAccuracy) + "M"
        } else {
            return String(format: "%.2f", metersToYards(meters: gpsAccuracy)) + "Yd"
        }
    }
}
