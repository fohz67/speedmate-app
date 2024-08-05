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
            
            Stepper(value: $value, in: range, step: step) {
                EmptyView()
            }
            
            Text(String(value))
                .font(
                    .custom("Universo-Bold", size: 14)
                )
        }
    }
}
