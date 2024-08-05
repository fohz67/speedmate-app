import SwiftUI

struct PersonalizationSheetSectionGauge: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Compteur")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                icon: "circle.fill",
                label: "Afficher le fond du compteur",
                isOn: $settings.showGaugeBackground
            )
            
            CustomToggle(
                icon: "slowmo",
                label: "Afficher les indicateurs de vitesse", isOn: $settings.showGaugeSpeedIndicators
            )
        }
    }
}
