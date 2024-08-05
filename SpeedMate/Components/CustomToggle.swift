import SwiftUI

struct CustomToggle: View {
    @EnvironmentObject var settings: SettingsModel

    var icon: String
    var label: String
    @Binding var isOn: Bool
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
                .foregroundColor(
                    .secondary
                )
            
            Toggle(label, isOn: $isOn)
                .toggleStyle(
                    SwitchToggleStyle(
                        tint: Color(getColor(settings.appTint))
                    )
                )
                .font(
                    .custom("Universo-Regular", size: 14)
                )
        }
    }
}
