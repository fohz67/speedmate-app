import SwiftUI

struct SettingsView: View {
    @ObservedObject var settings = SettingsModel()
    @State private var isShowingCustomization = false
    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    Section(header: Text("Compteur de vitesse") .font(.custom("Universo-Regular", size: 12)) .padding(.top, 25)) {
                        CustomToggle(icon: "location.circle", label: "Afficher la précision GPS", isOn: $settings.showGPSPrecision)
                        CustomToggle(icon: "waveform.path.ecg", label: "Afficher les animations", isOn: $settings.showAnimation)
                        CustomSegmentedPicker(icon: "arrow.left.arrow.right", label: "Côté du compteur", selection: $settings.speedometerSide, options: ["Gauche", "Droite"])
                        CustomButton(icon: "paintbrush", label: "Personnalisation") {
                            isShowingCustomization.toggle()
                        }
                        .sheet(isPresented: $isShowingCustomization) {
                            SettingsPersonalizationPage()
                        }
                        .accentColor(.purple)
                    }
                    
                    Section(header: Text("Unités") .font(.custom("Universo-Regular", size: 12))) {
                        CustomSegmentedPicker(icon: "speedometer", label: "Vitesse", selection: $settings.speedUnit, options: ["Km/h", "Mph"])
                        CustomSegmentedPicker(icon: "ruler", label: "Distance", selection: $settings.distanceUnit, options: ["Km", "Miles"])
                        CustomMenuPickerColor(icon: "thermometer", label: "Température", selection: $settings.temperatureUnit, options: ["Celsius", "Fahrenheit"])
                    }
                    
                    Section(header: Text("Application") .font(.custom("Universo-Regular", size: 12))) {
                        CustomMenuPickerColor(icon: "paintbrush", label: "Thème", selection: $settings.appAppearance, options: ["Auto", "Clair", "Sombre"])
                    }
                }
            }
            .navigationTitle("‎‎ Réglages")
        }
        .onAppear {
            configureNavigationBarAppearance()
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
