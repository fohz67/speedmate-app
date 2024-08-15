import SwiftUI

struct CustomGaugeCircle: View {
    @EnvironmentObject var settings: SettingsModel
    
    var configuration: GaugeStyleConfiguration
    var size: Double
    
    var body: some View {
        let strokeWidth = size / 15
        
        Circle()
            .trim(from: 0, to: 0.75 * configuration.value)
            .stroke(style: StrokeStyle(
                lineWidth: strokeWidth,
                lineCap: getLineCap,
                lineJoin: .round)
            )
            .fill(getTint)
            .rotationEffect(
                .degrees(135)
            )
    }
    
    private var getTint: LinearGradient {
        if settings.appTintSync {
            return getGradientUnique(color:  settings.appTint)
        } else if settings.gaugeTintStyle == "Couleur" {
            return getGradientUnique(color: settings.gaugeTintColor)
        } else {
            return getGradient(color: settings.gaugeTintGradient)
        }
    }
    
    private var getLineCap: CGLineCap {
        return settings.gaugeStyleCorner == "Arrondi" ? .round : .square
    }
}
