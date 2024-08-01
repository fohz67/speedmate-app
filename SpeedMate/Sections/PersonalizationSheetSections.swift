import SwiftUI

struct PersonalizationSheetSectionPreview: View {
    @ObservedObject var settings: SettingsModel
    
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
                    settings: settings,
                    speed: (Double(settings.gaugeMaximumSpeed) ?? 999),
                    size: 160
                )
                Spacer()
            }
        }
    }
}

struct PersonalizationSheetSectionGauge: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Compteur")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                settings: settings,
                icon: "speedometer",
                label: "Afficher le fond du compteur",
                isOn: $settings.showGaugeBackground
            )
            
            CustomToggle(
                settings: settings,
                icon: "slowmo",
                label: "Afficher les indicateurs de vitesse", isOn: $settings.showGaugeSpeedIndicators
            )
        }
    }
}

struct PersonalizationSheetSectionLine: View {
    @ObservedObject var settings: SettingsModel
    
    
    var isColor: Bool {
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
                settings: settings,
                icon: settings.showGaugeLine ? "lightswitch.on" : "lightswitch.off", label: "Afficher",
                isOn: $settings.showGaugeLine
            )
            
            if settings.showGaugeLine {
                CustomMenuPickerColor(
                    settings: settings,
                    icon: "hand.raised",
                    label: "Vitesse maximale",
                    selection: $settings.gaugeMaximumSpeed,
                    options: valuesSpeeds
                )
                
                CustomMenuPickerColor(
                    settings: settings,
                    icon: "scribble",
                    label: "Finition",
                    selection: $settings.gaugeStyleCorner,
                    options: valuesGaugeStyleCorner
                )
                
                if settings.appTintSync {
                    CustomText(label: "Pour modifier la teinte de la courbe indépendamment de la teinte de l'app, veuillez désactiver la synchronisation des teintes dans les réglages.")
                } else {
                    CustomMenuPickerColor(
                        settings: settings, icon: "paintbrush.pointed", label: "Type de teinte", selection: $settings.gaugeTintStyle, options: valuesgaugeTintStyle)
                    
                    CustomMenuPickerColor(
                        settings: settings,
                        icon: "paintpalette",
                        label: "Teinte",
                        selection: isColor ? $settings.gaugeTintColor : $settings.gaugeTintGradient,
                        options: isColor ? valuesColorThemes : valuesGradientThemes
                    )
                }
            }
        }
    }
}

struct PersonalizationSheetSectionSpeedLimit: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Limite de vitesse")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                settings: settings,
                icon: settings.showGaugeSpeedLimit ? "lightswitch.on" : "lightswitch.off",
                label: "Afficher",
                isOn: $settings.showGaugeSpeedLimit
            )
            
            if settings.showGaugeSpeedLimit {
                CustomMenuPickerColor(
                    settings: settings,
                    icon: "speedometer",
                    label: "Vitesse",
                    selection: $settings.gaugeSpeedLimit,
                    options: valuesSpeeds
                )
                
                CustomToggle(
                    settings: settings,
                    icon: settings.showGaugeSpeedLimitFlash ? "bolt" : "bolt.slash",
                    label: "Alerte visuelle",
                    isOn: $settings.showGaugeSpeedLimitFlash
                )
                
                CustomToggle(
                    settings: settings,
                    icon: settings.showGaugeSpeedLimitSound ? "speaker.wave.3" : "speaker.slash",
                    label: "Alerte sonore",
                    isOn: $settings.showGaugeSpeedLimitSound
                )
            }
        }
    }
}
