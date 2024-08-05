import SwiftUI

struct CustomPickerBase<PickerStyleType: PickerStyle>: View {
    @EnvironmentObject var settings: SettingsModel

    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    var style: PickerStyleType
    var frameWidth: CGFloat?
    var unit: String
    
    private func getText(for option: String) -> String {
        return unit.isEmpty ? option : "\(option) \(unit)"
    }
    
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
            
            Picker("", selection: $selection) {
                ForEach(options, id: \.self) { option in
                    Text(getText(for: option)).tag(option)
                }
            }
            .accentColor(getAppTint(settings: settings))
            .pickerStyle(style)
            .frame(width: frameWidth)
        }
    }
}
