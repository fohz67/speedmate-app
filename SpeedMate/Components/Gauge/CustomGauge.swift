import SwiftUI

private struct CustomGaugeStyle: GaugeStyle {
    @EnvironmentObject var settings: SettingsModel
    
    var size: Double
    
    func makeBody(configuration: Configuration) -> some View {
        return ZStack {
            
            if settings.showGaugeBackground {
                Circle()
                    .foregroundColor(Color(.systemGray6))
            }
            
            if settings.showGaugeLine {
                CustomGaugeCircle(configuration: configuration, size: size)
            }
            
            if settings.showGaugeSpeedIndicators {
                CustomGaugeSpeedIndicators(size: size)
            }
            
            CustomGaugeValues(configuration: configuration, size: size)
            
        }
        .frame(width: size, height: size)
    }
}

struct CustomGauge: View {
    @EnvironmentObject var settings: SettingsModel
    
    var speed: Double
    var gpsAccuracy: Double
    var temperature: Double
    var gForce: Double
    var size: Double
    
    var body: some View {
        ZStack {
            if gpsAccuracy != -67 && temperature != -67 && gForce != -67 {
                CustomGaugeMetrics(
                    size: size,
                    metrics: metrics
                )
            }
            
            Gauge(value: getGaugeValue, in: 0...getMaxSpeed) {
                Image(systemName: "gauge.medium")
                    .font(
                        .system(size: 50.0)
                    )
            }
            currentValueLabel: {
                Text(String(format: "%.0f", speed))
                    .padding(.top, size / 10)
            }
            .gaugeStyle(CustomGaugeStyle(size: size))
        }
        .frame(width: size, height: size)
    }
    
    private var getMaxSpeed: Double {
        return (Double(settings.gaugeMaximumSpeed))
    }
    
    private var getGaugeValue: Double {
        return speed > getMaxSpeed ? getMaxSpeed : speed
    }
    
    private var metrics: [Metric?] {
        let positionManager = MetricPositionManager(settings: settings)
        return positionManager.getMetricsArray(
            gpsAccuracy: gpsAccuracy,
            temperature: temperature,
            gForce: gForce
        )
    }
}
