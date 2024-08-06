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
            
            Text(label)
                .font(
                    .custom("Universo-Bold", size: 14)
                )
                .padding(.top, 2)
            
            Spacer()
            
            TextField("Aa", text: $text)
                .font(
                    .custom("Universo-Regular", size: 14)
                )
                .foregroundColor(getAppTint(settings: settings))
                .padding(.top, 2)
                .multilineTextAlignment(.trailing)
                .frame(maxWidth: 200)
                .textFieldStyle(PlainTextFieldStyle())
        }
    }
}
