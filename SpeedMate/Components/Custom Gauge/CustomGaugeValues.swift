import SwiftUI

struct CustomGaugeValues: View {
    @EnvironmentObject var settings: SettingsModel
    
    var configuration: GaugeStyleConfiguration
    var size: Double
    
    var body: some View {
        let unitFontSize: Double = size / 15
        let fontSize: Double = size / 3
        
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
