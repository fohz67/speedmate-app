import SwiftUI

struct SettingsPersonalizationPage: View {
    @Environment(\.presentationMode) var presentationMode
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section(header: Text("Prévisualisation").font(.custom("Universo-Regular", size: 12)).padding(.top, 25)) {
                        HStack {
                            Spacer()
                            CustomGauge(settings: settings, speed: 999.0, size: 160)
                            Spacer()
                        }
                    }
                    
                    Section(header: Text("Affichage").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: "speedometer", label: "Afficher le fond du compteur", isOn: $settings.showGaugeBackground)
                        CustomToggle(settings: settings, icon: "slowmo", label: "Afficher les indicateurs de vitesse", isOn: $settings.showGaugeSpeedIndicators)
                    }
                    
                    Section(header: Text("Thème de la courbe").font(.custom("Universo-Regular", size: 12))) {
                        CustomMenuPickerColor(icon: "scribble", label: "Finition", selection: $settings.gaugeStyleCorner, options: valuesGaugeStyleCorner)
                        CustomMenuPickerColor(icon: "paintbrush.pointed", label: "Type de Remplissage", selection: $settings.gaugeColorStyle, options: valuesGaugeColorStyle)
                        if settings.gaugeColorStyle == "Couleur" {
                            CustomMenuPickerColor(icon: "paintpalette", label: "Couleur", selection: $settings.gaugeColor, options: valuesColorThemes)
                        } else {
                            CustomMenuPickerColor(icon: "paintpalette", label: "Dégradé", selection: $settings.gaugeGradiant, options: valuesGradientThemes)
                        }
                    }
                    
                    Section(header: Text("Informations d'affichage").font(.custom("Universo-Regular", size: 12))) {
                        CustomMenuPickerColor(icon: "textformat.123", label: "Taille de la vitesse", selection: $settings.speedTextSize, options: valuesPercentageSizes)
                        CustomMenuPickerColor(icon: "textformat.abc", label: "Taille de l'unité", selection: $settings.unitTextSize, options: valuesPercentageSizes)
                        CustomMenuPickerColor(icon: "hand.raised", label: "Echelle de vitesse maximale", selection: $settings.gaugeMaximumSpeed, options: valuesSpeeds)
                    }
                    
                    Section(header: Text("Limite de vitesse").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: "exclamationmark.triangle", label: "Activation", isOn: $settings.gaugeSpeedLimit)
                        if settings.gaugeSpeedLimit {
                            CustomMenuPickerColor(icon: "hand.raised", label: "Vitesse", selection: $settings.gaugeSpeedLimitNumber, options: valuesSpeeds)
                            CustomToggle(settings: settings, icon: "exclamationmark.triangle", label: "Alerte visuelle", isOn: $settings.gaugeSpeedLimitFlash)
                            CustomToggle(settings: settings, icon: "exclamationmark.triangle", label: "Alerte sonore", isOn: $settings.gaugeSpeedLimitSound)
                        }
                    }
                }
            }
            .navigationTitle("Personnalisation")
            .navigationBarItems(trailing: Button("Fermer") {
                presentationMode.wrappedValue.dismiss()
            }.accentColor(Color(getColor(for: settings.appTint))))
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}

struct SettingsPersonalizationPage_Previews: PreviewProvider {
    static var previews: some View {
        SettingsPersonalizationPage(settings: SettingsModel())
    }
}
