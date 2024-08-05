import SwiftUI

struct CustomPickerSegmented: View {
    @EnvironmentObject var settings: SettingsModel

    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    var unit: String
    
    var body: some View {
        CustomPickerBase(
            icon: icon,
            label: label,
            selection: $selection,
            options: options,
            style: SegmentedPickerStyle(),
            frameWidth: 150,
            unit: unit
        )
    }
}
