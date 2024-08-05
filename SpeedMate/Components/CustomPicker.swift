import SwiftUI

struct CustomPicker: View {
    @EnvironmentObject var settings: SettingsModel
    
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    var unit: String
    
    private func getText(for option: String) -> String {
        return unit.isEmpty ? option : "\(option) \(unit)"
    }
    
    var body: some View {
        ZStack {
            HStack {
                Image(systemName: icon)
                    .frame(width: 30, height: 45)
                    .foregroundColor(.secondary)
                
                Text(label)
                    .font(.custom("Universo-Regular", size: 14))
                
                Spacer()
                
                Picker("", selection: $selection) {
                    ForEach(options, id: \.self) { option in
                        Text(getText(for: option)).tag(option)
                    }
                }
                .pickerStyle(MenuPickerStyle())
                .frame(width: 150)
            }
            
            HStack {
                Spacer()
                
                HStack() {
                    Text(selection)
                        .font(.custom("Universo-Bold", size: 14))
                        .foregroundColor(getAppTint(settings: settings))
                        .padding(.top, 2)
                    
                    Image(systemName: "chevron.right")
                        .foregroundColor(getAppTint(settings: settings))
                }
                .padding(.vertical, 10)
                .background(Color(.secondarySystemGroupedBackground))
                .allowsHitTesting(false)
            }
        }
    }
}
