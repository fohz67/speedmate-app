import SwiftUI

struct SettingsViewSectionTheming: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Thème")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPicker(
                icon: "iphone",
                label: "Apparence",
                selection: $settings.appAppearance,
                options: valuesAppAppearance,
                unit: ""
            )
            
            CustomPicker(
                icon: "paintpalette",
                label: "Teinte",
                selection: $settings.appTint,
                options: valuesColorThemes,
                unit: ""
            )
            
            CustomToggle(
                icon: "arrow.triangle.2.circlepath",
                label: "Synchroniser l'app et le compteur",
                isOn: $settings.appTintSync
            )
        }
    }
}
