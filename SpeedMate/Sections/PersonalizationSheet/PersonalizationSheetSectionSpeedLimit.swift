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
            .blur(radius: 4)
            
            if settings.showGaugeSpeedLimit {
                CustomNumberSelector(
                    icon: "speedometer",
                    label: "Vitesse",
                    value: $settings.gaugeSpeedLimit,
                    range: 5...1000,
                    step: 5
                )
                .blur(radius: 4)
                
                CustomToggle(
                    icon: settings.showGaugeSpeedLimitFlash ? "bolt" : "bolt.slash",
                    label: "Alerte visuelle",
                    isOn: $settings.showGaugeSpeedLimitFlash
                )
                .blur(radius: 4)
                
                CustomToggle(
                    icon: settings.showGaugeSpeedLimitSound ? "speaker.wave.3" : "speaker.slash",
                    label: "Alerte sonore",
                    isOn: $settings.showGaugeSpeedLimitSound
                )
                .blur(radius: 4)
            }
        }
    }
}
