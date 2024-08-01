import SwiftUI

struct CustomToggle: View {
    @ObservedObject var settings: SettingsModel
    var icon: String
    var label: String
    @Binding var isOn: Bool
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
                .foregroundColor(.secondary)
            Toggle(label, isOn: $isOn)
                .toggleStyle(SwitchToggleStyle(tint: Color(getColor(for: settings.appTint))))
                .font(.custom("Universo-Regular", size: 14))
        }
    }
}
