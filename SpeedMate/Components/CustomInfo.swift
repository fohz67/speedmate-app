import SwiftUI

struct CustomInfo: View {
    @EnvironmentObject var settings: SettingsModel
    
    var label: String
    var value: String
    var unit: String
    
    var body: some View {
        VStack(alignment: .center) {
            Text(label)
                .font(
                    .custom("Universo-Light", size: getLabelSize)
                )
                .foregroundColor(.secondary)
            
            HStack {
                Text(value)
                    .font(
                        .custom(getFont, size: getValueSize)
                    )
                
                Text(unit)
                    .font(
                        .custom("Universo-Regular", size: 20)
                    )
                    .foregroundColor(getAppTint(settings: settings))
            }
        }
    }
    
    private var getFont: String {
        return unit.isEmpty ? "Universo-Bold" : "Universo-Black"
    }
    
    private var getLabelSize: Double {
        return unit.isEmpty ? 15 : 17
    }
    
    private var getValueSize: Double {
        return unit.isEmpty ? 22 : 30
    }
}
