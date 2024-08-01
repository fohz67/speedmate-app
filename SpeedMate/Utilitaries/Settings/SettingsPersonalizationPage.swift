import SwiftUI

struct SettingsPersonalizationPage: View {
    @Environment(\.presentationMode) var presentationMode
    @ObservedObject var settings: SettingsModel
    
    var isColor: Bool {
        settings.gaugeColorStyle == "Couleur"
    }
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section(header: Text("Prévisualisation").font(.custom("Universo-Regular", size: 12)).padding(.top, 25)) {
                        HStack {
                            Spacer()
                            CustomGauge(settings: settings, speed: (Double(settings.gaugeMaximumSpeed) ?? 999), size: 160)
                            Spacer()
                        }
                    }
                    
                    Section(header: Text("Compteur").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: "speedometer", label: "Afficher le fond du compteur", isOn: $settings.showGaugeBackground)
                        CustomToggle(settings: settings, icon: "slowmo", label: "Afficher les indicateurs de vitesse", isOn: $settings.showGaugeSpeedIndicators)
                    }
                    
                    Section(header: Text("Courbe").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: settings.showGaugeLine ? "lightswitch.on" : "lightswitch.off", label: "Afficher", isOn: $settings.showGaugeLine)
                        if settings.showGaugeLine {
                            CustomMenuPickerColor(settings: settings, icon: "hand.raised", label: "Vitesse maximale", selection: $settings.gaugeMaximumSpeed, options: valuesSpeeds)
                            CustomMenuPickerColor(settings: settings, icon: "scribble", label: "Finition", selection: $settings.gaugeStyleCorner, options: valuesGaugeStyleCorner)
                            if settings.appTintSync {
                                CustomText(label: "Pour modifier la teinte de la courbe indépendamment de la teinte de l'app, veuillez désactiver la synchronisation des teintes dans les réglages.")
                            } else {
                                CustomMenuPickerColor(settings: settings, icon: "paintbrush.pointed", label: "Type de teinte", selection: $settings.gaugeColorStyle, options: valuesGaugeColorStyle)
                                CustomMenuPickerColor(settings: settings, icon: "paintpalette", label: "Teinte", selection: isColor ? $settings.gaugeColor : $settings.gaugeGradiant, options: isColor ? valuesColorThemes : valuesGradientThemes)
                            }
                        }
                    }
                    
                    Section(header: Text("Vitesse").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: settings.showGaugeSpeed ? "lightswitch.on" : "lightswitch.off", label: "Afficher", isOn: $settings.showGaugeSpeed)
                        if settings.showGaugeSpeed {
                            CustomMenuPickerColor(settings: settings, icon: "arrow.down.forward.and.arrow.up.backward", label: "Taille", selection: $settings.speedTextSize, options: valuesPercentageSizes)
                        }
                    }
                    
                    Section(header: Text("Unité").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: settings.showGaugeUnit ? "lightswitch.on" : "lightswitch.off", label: "Afficher", isOn: $settings.showGaugeUnit)
                        if settings.showGaugeUnit {
                            CustomMenuPickerColor(settings: settings, icon: "arrow.down.forward.and.arrow.up.backward", label: "Taille", selection: $settings.unitTextSize, options: valuesPercentageSizes)
                        }
                    }
                    
                    Section(header: Text("Limite de vitesse").font(.custom("Universo-Regular", size: 12))) {
                        CustomToggle(settings: settings, icon: settings.gaugeSpeedLimit ? "lightswitch.on" : "lightswitch.off", label: "Afficher", isOn: $settings.gaugeSpeedLimit)
                        if settings.gaugeSpeedLimit {
                            CustomMenuPickerColor(settings: settings, icon: "speedometer", label: "Vitesse", selection: $settings.gaugeSpeedLimitNumber, options: valuesSpeeds)
                            CustomToggle(settings: settings, icon: settings.gaugeSpeedLimitFlash ? "bolt" : "bolt.slash", label: "Alerte visuelle", isOn: $settings.gaugeSpeedLimitFlash)
                            CustomToggle(settings: settings, icon: settings.gaugeSpeedLimitSound ? "speaker.wave.3" : "speaker.slash", label: "Alerte sonore", isOn: $settings.gaugeSpeedLimitSound)
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
