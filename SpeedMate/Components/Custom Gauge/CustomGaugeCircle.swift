import SwiftUI

struct CustomGaugeCircle: View {
    @EnvironmentObject var settings: SettingsModel
    
    var configuration: GaugeStyleConfiguration
    var size: Double
    
    private var getTint: LinearGradient {
        if settings.appTintSync {
            return getGradientUnique(settings.appTint)
        } else if settings.gaugeTintStyle == "Couleur" {
            return getGradientUnique(settings.gaugeTintColor)
        } else {
            return getGradient(settings.gaugeTintGradient)
        }
    }
    
    private var getLineCap: CGLineCap {
        return settings.gaugeStyleCorner == "Arrondi" ? .round : .square
    }
    
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
}
