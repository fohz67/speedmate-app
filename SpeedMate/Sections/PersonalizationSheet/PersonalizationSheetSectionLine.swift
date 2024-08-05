import SwiftUI

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
                CustomNumberSelector(
                    icon: "gauge",
                    label: "Vitesse maximale",
                    value: $settings.gaugeMaximumSpeed,
                    range: 5...1000,
                    step: 5
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
