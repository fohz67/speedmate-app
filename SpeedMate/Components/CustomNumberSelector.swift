import SwiftUI

struct CustomNumberSelector: View {
    @EnvironmentObject var settings: SettingsModel
    
    var icon: String
    var label: String
    @Binding var value: Int
    var range: ClosedRange<Int>
    var step: Int
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
                .foregroundColor(.secondary)
            
            Text(label)
                .font(
                    .custom("Universo-Regular", size: 14)
                )
            
            Spacer()
            
            Text(String(value))
                .font(
                    .custom("Universo-Bold", size: 14)
                )
                .foregroundColor(getAppTint(settings: settings))
                .padding(.top, 3)
                .padding(.trailing, 8)
            
            Stepper("", value: $value, in: range, step: step)
                .labelsHidden()
        }
    }
}
