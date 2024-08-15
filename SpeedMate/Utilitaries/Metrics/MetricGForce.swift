import SwiftUI

struct MetricGForce: Metric {
    var gForce: Double
    
    var icon: String {
        return "arrow.up.right.circle"
    }
    
    func getText(using settings: SettingsModel) -> String {
        return String(format: "%.2f", gForce) + "G"
    }
}
