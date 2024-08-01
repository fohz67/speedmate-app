import SwiftUI

struct CustomInfo: View {
    @ObservedObject var settings: SettingsModel
    var label: String
    var value: String
    var unit: String
    
    var getFont: String {
        unit.isEmpty ? "Universo-Bold" : "Universo-Black"
    }
    
    var body: some View {
        VStack(alignment: .center) {
            Text(label)
                .font(
                    .custom("Universo-Light", size: 17)
                )
                .foregroundColor(.secondary)
            
            HStack {
                Text(value)
                    .font(
                        .custom(getFont, size: unit.isEmpty ? 24 : 30)
                    )
                
                Text(unit)
                    .font(
                        .custom("Universo-Regular", size: 20)
                    )
                    .foregroundColor(Color(getColor(for: settings.appTint)))
            }
        }
    }
}
