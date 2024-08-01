import SwiftUI

struct SettingsPersonalizationPage: View {
    @Environment(\.presentationMode) var presentationMode
    @StateObject var settings = SettingsModel()
    
    var body: some View {
        NavigationView {
            VStack {
                Spacer()
                    .frame(height: 50)
                                
                Form {
                    CustomGauge(currentValue: 67.0, frameSize: 160)

                    Section(header: Text("Affichage").font(.custom("Universo-Regular", size: 12)).padding(.top, 15)) {
                        CustomToggle(icon: "speedometer", label: "Afficher le fond du compteur", isOn: $settings.showGaugeBackground)
                        CustomToggle(icon: "slowmo", label: "Afficher les indicateurs de vitesse", isOn: $settings.showGaugeSpeedIndicators)
                    }
                    
                    Section(header: Text("Thème de la courbe").font(.custom("Universo-Regular", size: 12)).padding(.top, 15)) {
                        CustomMenuPickerColor(icon: "scribble", label: "Finition", selection: $settings.gaugeStyleCorner, options: ["Arrondi", "Brut"])
                        CustomMenuPickerColor(icon: "paintbrush.pointed", label: "Type de Remplissage", selection: $settings.gaugeColorStyle, options: ["Couleur", "Dégradé"])
                        CustomMenuPickerColor(icon: "paintbrush.pointed", label: "Couleur", selection: $settings.gaugeColor, options: ["Rouge", "Rose", "Violet", "Bleu", "Cyan", "Vert", "Jaune", "Orange", "Gris", "Blanc", "Noir"])
                        CustomMenuPickerColor(icon: "paintbrush.pointed", label: "Dégradé", selection: $settings.gaugeGradiant, options: ["Rouge", "Rose", "Violet", "Bleu", "Cyan", "Vert", "Jaune", "Orange", "Gris", "Blanc", "Noir"])
                    }
                    
                    Section(header: Text("Informations d'affichage").font(.custom("Universo-Regular", size: 12)).padding(.top, 15)) {
                        CustomMenuPickerColor(icon: "textformat.123", label: "Taille de la vitesse", selection: $settings.speedTextSize, options: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "110%"])
                        CustomMenuPickerColor(icon: "textformat.abc", label: "Taille de l'unité", selection: $settings.unitTextSize, options: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "110%"])
                        CustomMenuPickerColor(icon: "hand.raised", label: "Echelle de vitesse maximale", selection: $settings.gaugeMaximumSpeed, options: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "250", "300", "350", "400", "450", "500", "999"])
                    }
                    
                    Section(header: Text("Limite de vitesse").font(.custom("Universo-Regular", size: 12)).padding(.top, 15)) {
                        CustomToggle(icon: "exclamationmark.triangle", label: "Activation", isOn: $settings.gaugeSpeedLimit)
                        CustomMenuPickerColor(icon: "hand.raised", label: "Vitesse", selection: $settings.gaugeSpeedLimitNumber, options: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "250", "300", "350", "400", "450", "500", "999"])
                        CustomToggle(icon: "exclamationmark.triangle", label: "Alerte visuelle", isOn: $settings.gaugeSpeedLimitFlash)
                        CustomToggle(icon: "exclamationmark.triangle", label: "Alerte sonore", isOn: $settings.gaugeSpeedLimitSound)
                    }
                }
            }
            .navigationTitle("Personnalisation")
            .navigationBarItems(trailing: Button("Fermer") {
                presentationMode.wrappedValue.dismiss()
            })
        }
        .onAppear {
            configureNavigationBarAppearance()
        }
    }
}

struct SettingsPersonalizationPage_Previews: PreviewProvider {
    static var previews: some View {
        SettingsPersonalizationPage()
    }
}
