import Foundation

struct MetricPositionManager {
    let settings: SettingsModel

    func positionIndex(for position: String) -> Int {
        switch position {
        case "En haut à gauche":
            return 0
        case "En haut à droite":
            return 1
        case "En bas à gauche":
            return 2
        case "En bas à droite":
            return 3
        default:
            return -1
        }
    }
    
    func getMetricsArray(gpsAccuracy: Double, temperature: Double, gForce: Double) -> [Metric?] {
        var metricsArray: [Metric?] = Array(repeating: nil, count: 4)
        
        let positions = [
            settings.GPSPrecisionPosition,
            settings.temperaturePosition,
            settings.gForcePosition,
        ]
        
        let metricsToInsert: [Metric?] = [
            MetricGPSAccuracy(gpsAccuracy: gpsAccuracy),
            MetricTemperature(temperature: temperature),
            MetricGForce(gForce: gForce),
            nil,
        ]
        
        for (index, position) in positions.enumerated() {
            let posIndex = positionIndex(for: position)
            if posIndex != -1 {
                metricsArray[posIndex] = metricsToInsert[index]
            }
        }
        
        return metricsArray
    }
}
