import SwiftUI

struct PersonalizationSheetSectionPreview: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Prévisualisation")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
                .padding(.top, 25)
        ) {
            HStack {
                Spacer()
                
                CustomGauge(
                    speed: (Double(settings.gaugeMaximumSpeed) ?? 999),
                    gpsAccuracy: -67,
                    temperature: -67,
                    size: 160
                )
                
                Spacer()
            }
        }
    }
}

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

struct PersonalizationSheetSectionLine: View {
    @EnvironmentObject var settings: SettingsModel
    
    private var isColor: Bool {
        settings.gaugeTintStyle == "Couleur"
    }
    
    var body: some View {
        Section(
            header: Text("Courbe")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                icon: "circle",
                label: "Afficher",
                isOn: $settings.showGaugeLine
            )
            
            if settings.showGaugeLine {
                CustomPickerMenu(
                    icon: "gauge",
                    label: "Vitesse maximale",
                    selection: $settings.gaugeMaximumSpeed,
                    options: valuesSpeeds,
                    unit: settings.speedUnit
                )
                
                CustomPickerMenu(
                    icon: "scribble",
                    label: "Finition",
                    selection: $settings.gaugeStyleCorner,
                    options: valuesGaugeStyleCorner,
                    unit: ""
                )
                
                if settings.appTintSync {
                    CustomText(label: "Pour modifier l'apparence de la courbe indépendamment du compteur, veuillez désactiver l'option \"Synchroniser l'app et le compteur\".")
                } else {
                    CustomPickerMenu(
                        icon: "paintbrush.pointed",
                        label: "Type de teinte",
                        selection: $settings.gaugeTintStyle,
                        options: valuesgaugeTintStyle,
                        unit: ""
                    )
                    
                    CustomPickerMenu(
                        icon: "paintpalette",
                        label: "Teinte",
                        selection: isColor ? $settings.gaugeTintColor : $settings.gaugeTintGradient,
                        options: isColor ? valuesColorThemes : valuesGradientThemes,
                        unit: ""
                    )
                }
            }
        }
    }
}

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
                CustomPickerMenu(
                    icon: "speedometer",
                    label: "Vitesse",
                    selection: $settings.gaugeSpeedLimit,
                    options: valuesSpeeds,
                    unit: settings.speedUnit
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
