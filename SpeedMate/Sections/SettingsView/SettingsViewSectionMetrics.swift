import SwiftUI

struct SettingsViewSectionMetrics: View {
    @EnvironmentObject var settings: SettingsModel
    
    struct PickerInfo {
        var label: String
        var icon: String
        var selection: Binding<String>
    }
    
    var body: some View {
        Section(
            header: Text("Métriques")
                .font(.custom("Universo-Regular", size: 12))
        ) {
            ForEach(pickerInfos.indices, id: \.self) { index in
                CustomPicker(
                    icon: pickerInfos[index].icon,
                    label: pickerInfos[index].label,
                    selection: pickerInfos[index].selection,
                    options: filteredOptions(excluding: pickerInfos.map { $0.selection.wrappedValue }, at: index),
                    unit: ""
                )
            }
        }
    }
    
    private func filteredOptions(excluding selections: [String], at currentIndex: Int) -> [String] {
        return valuesPosition.filter { option in
            !selections.enumerated().contains { index, selection in
                index != currentIndex && selection == option && selection != "Ne pas afficher"
            }
        }
    }
    
    private var pickerInfos: [PickerInfo] {
        [
            PickerInfo(
                label: "Précision GPS",
                icon: "location.circle",
                selection: $settings.GPSPrecisionPosition
            ),
            PickerInfo(
                label: "Température",
                icon: "thermometer",
                selection: $settings.temperaturePosition
            ),
        ]
    }
}
