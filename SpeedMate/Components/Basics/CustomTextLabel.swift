import SwiftUI

struct CustomTextLabel: View {
    @EnvironmentObject var settings: SettingsModel
    
    var icon: String
    var label: String
    var text: String
    
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
            
            Text(text)
                .font(
                    .custom("Universo-Bold", size: 14)
                )
                .foregroundColor(getAppTint(settings: settings))
                .padding(.top, 2)
                .multilineTextAlignment(.trailing)
        }
    }
}
