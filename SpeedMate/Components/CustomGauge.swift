import SwiftUI

struct CustomGaugeStyle: GaugeStyle {
    var size: Double
    @ObservedObject var settings: SettingsModel

    public init(size: Double, settings: SettingsModel) {
        self.size = size
        self.settings = settings
    }
    
    func makeBody(configuration: Configuration) -> some View {
        let strokeWidth = size / 15
        let innerStrokeWidth = size / 30
        let dashSize = size / 10
        let fontSize = size / 3
        let unitFontSize = size / 15
        
        return ZStack {
            
            if (settings.showGaugeBackground) {
                Circle()
                    .foregroundColor(Color(.systemGray6))
            }
            
            Circle()
                .trim(from: 0, to: 0.75 * configuration.value)
                .stroke(settings.appTintSync ? getGradientUnique(for: settings.appTint) : settings.gaugeColorStyle == "Couleur" ? getGradientUnique(for: settings.gaugeColor) : getGradient(for: settings.gaugeGradiant), lineWidth: strokeWidth)
                .rotationEffect(.degrees(135))
            
            if (settings.showGaugeSpeedIndicators) {
                Circle()
                    .trim(from: 0, to: 0.75)
                    .stroke(Color.black, style: StrokeStyle(lineWidth: innerStrokeWidth, lineCap: .butt, lineJoin: .round, dash: [1, dashSize], dashPhase: 0.0))
                    .rotationEffect(.degrees(135))
            }
            
            VStack {
                configuration.currentValueLabel
                    .font(.custom("Universo-Black", size: fontSize))
                Text(settings.speedUnit.uppercased())
                    .font(.custom("Universo-Regular", size: unitFontSize))
                    .foregroundColor(.secondary)
            }
            
        }
        .frame(width: size, height: size)
    }
}

struct CustomGauge: View {
    @ObservedObject var settings: SettingsModel
    var speed: Double
    var size: Double
    
    var body: some View {
        Gauge(value: speed, in: 0...(Double(settings.gaugeMaximumSpeed) ?? 999)) {
            Image(systemName: "gauge.medium")
                .font(.system(size: 50.0))
        } currentValueLabel: {
            Text(String(format: "%.0f", speed))
                .padding(.top, size / 10)
        }
        .gaugeStyle(CustomGaugeStyle(size: size, settings: settings))
    }
}
