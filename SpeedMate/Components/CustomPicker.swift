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
    
    private var sections: [String: [String]] {
        var sections = [String: [String]]()
        var currentSection: String?
        
        for option in options {
            if option.hasPrefix("@") {
                currentSection = String(option.dropFirst())
                sections[currentSection!] = []
            } else {
                if let section = currentSection {
                    sections[section]?.append(option)
                } else {
                    sections[""] = (sections[""] ?? []) + [option]
                }
            }
        }
        
        return sections
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
                    ForEach(sections.keys.sorted(), id: \.self) { section in
                        if section.isEmpty {
                            ForEach(sections[section]!, id: \.self) { option in
                                Text(getText(for: option)).tag(option)
                            }
                        } else {
                            Section(header: Text(section).font(.headline)) {
                                ForEach(sections[section]!, id: \.self) { option in
                                    Text(getText(for: option)).tag(option)
                                }
                            }
                        }
                    }
                }
                .pickerStyle(MenuPickerStyle())
                .frame(width: 150)
            }
            
            HStack {
                Spacer()
                
                HStack {
                    Text(selection)
                        .font(.custom("Universo-Bold", size: 14))
                        .foregroundColor(getAppTint(settings: settings))
                        .padding(.top, 2)
                    
                    Image(systemName: "chevron.right")
                        .foregroundColor(getAppTint(settings: settings))
                }
                .frame(height: 45)
                .background(Color(.secondarySystemGroupedBackground))
                .allowsHitTesting(false)
            }
        }
    }
}
