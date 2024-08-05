import SwiftUI

struct CustomTextField: View {
    @EnvironmentObject var settings: SettingsModel
    
    var icon: String
    var label: String
    @Binding var text: String
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
                .foregroundColor(.secondary)
            
            TextField(label, text: $text)
                .textFieldStyle(PlainTextFieldStyle())
                .font(
                    .custom("Universo-Regular", size: 14)
                )
                .padding(.top, 2)
        }
    }
}
