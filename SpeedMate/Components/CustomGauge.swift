import SwiftUI

struct CustomGaugeCircle: View {
    var configuration: GaugeStyleConfiguration
    @ObservedObject var settings: SettingsModel
    var size: Double
    
    var getTint: LinearGradient {
        if settings.appTintSync {
            return getGradientUnique(for: settings.appTint)
        } else if settings.gaugeTintStyle == "Couleur" {
            return getGradientUnique(for: settings.gaugeTintColor)
        } else {
            return getGradient(for: settings.gaugeTintGradient)
        }
    }
    
    var body: some View {
        let strokeWidth = size / 15
        
        Circle()
            .trim(from: 0, to: 0.75 * configuration.value)
            .stroke(getTint, lineWidth: strokeWidth)
            .rotationEffect(.degrees(135))
    }
}


struct CustomGaugeSpeedIndicators: View {
    var size: Double
    var innerStrokeWidth: Double
    var dashSize: Double
    
    public init(size: Double) {
        self.size = size
        self.innerStrokeWidth = size / 30
        self.dashSize = size / 10
    }
    
    var body: some View {
        Circle()
            .trim(from: 0, to: 0.75)
            .stroke(
                Color.black,
                style: StrokeStyle(
                    lineWidth: innerStrokeWidth,
                    lineCap: .butt,
                    lineJoin: .round,
                    dash: [1, dashSize],
                    dashPhase: 0.0
                )
            )
            .rotationEffect(
                .degrees(135)
            )
        
    }
}

struct CustomGaugeValues: View {
    var configuration: GaugeStyleConfiguration
    @ObservedObject var settings: SettingsModel
    var size: Double
    var unitFontSize: Double
    var fontSize: Double
    
    public init(configuration: GaugeStyleConfiguration, settings: SettingsModel, size: Double) {
        self.configuration = configuration
        self.settings = settings
        self.size = size
        self.unitFontSize = size / 15
        self.fontSize = size / 3
    }
    
    var body: some View {
        VStack {
            configuration.currentValueLabel
                .font(
                    .custom("Universo-Black", size: fontSize)
                )
            
            Text(settings.speedUnit.uppercased())
                .font(
                    .custom("Universo-Regular", size: unitFontSize)
                )
                .foregroundColor(.secondary)
        }
    }
}

struct CustomGaugeStyle: GaugeStyle {
    @ObservedObject var settings: SettingsModel
    var size: Double
    
    var getTint: LinearGradient {
        if settings.appTintSync {
            return getGradientUnique(for: settings.appTint)
        } else if settings.gaugeTintStyle == "Couleur" {
            return getGradientUnique(for: settings.gaugeTintColor)
        } else {
            return getGradient(for: settings.gaugeTintGradient)
        }
    }
    
    public init(settings: SettingsModel, size: Double) {
        self.settings = settings
        self.size = size
    }
    
    func makeBody(configuration: Configuration) -> some View {
        let strokeWidth = size / 15
        
        return ZStack {
            
            if settings.showGaugeBackground {
                Circle()
                    .foregroundColor(Color(.systemGray6))
            }
            
            CustomGaugeCircle(configuration: configuration, settings: settings, size: size)
            
            if settings.showGaugeSpeedIndicators {
                CustomGaugeSpeedIndicators(size: size)
            }
            
            CustomGaugeValues(configuration: configuration, settings: settings, size: size)
            
        }
        .frame(width: size, height: size)
    }
}

struct CustomGauge: View {
    @ObservedObject var settings: SettingsModel
    var speed: Double
    var size: Double
    
    var safeSpeed: Double {
        Double(settings.gaugeMaximumSpeed) ?? 999
    }
    
    var body: some View {
        Gauge(value: speed, in: 0...safeSpeed) {
            Image(systemName: "gauge.medium")
                .font(.system(size: 50.0))
        }
        currentValueLabel: {
            Text(String(format: "%.0f", speed))
                .padding(.top, size / 10)
        }
        .gaugeStyle(CustomGaugeStyle(settings: settings, size: size))
    }
}
