import SwiftUI

struct PersonalizationSheetSectionSpeedLimit: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Limite de vitesse")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                icon: settings.showGaugeSpeedLimit ? "lightswitch.on" : "lightswitch.off",
                label: "Afficher",
                isOn: $settings.showGaugeSpeedLimit
            )
            
            if settings.showGaugeSpeedLimit {
                CustomNumberSelector(
                    icon: "speedometer",
                    label: "Vitesse",
                    value: $settings.gaugeSpeedLimit,
                    range: 5...1000,
                    step: 5,
                    unit: settings.speedUnit
                )
                
                CustomToggle(
                    icon: settings.showGaugeSpeedLimitFlash ? "bolt" : "bolt.slash",
                    label: "Alerte visuelle",
                    isOn: $settings.showGaugeSpeedLimitFlash
                )
                
                CustomToggle(
                    icon: settings.showGaugeSpeedLimitSound ? "speaker.wave.3" : "speaker.slash",
                    label: "Alerte sonore",
                    isOn: $settings.showGaugeSpeedLimitSound
                )
            }
        }
    }
}
