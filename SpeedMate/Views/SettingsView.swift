import SwiftUI

struct SettingsView: View {
    @ObservedObject var settings: SettingsModel
    @State private var isShowingCustomization = false
    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    Section(header: Text("Compteur de vitesse") .font(.custom("Universo-Regular", size: 12)).padding(.top, 25)) {
                        CustomToggle(settings: settings, icon: "location.circle", label: "Afficher la précision GPS", isOn: $settings.showGPSPrecision)
                        CustomToggle(settings: settings, icon: "waveform.path.ecg", label: "Afficher les animations", isOn: $settings.showAnimation)
                        CustomSegmentedPicker(icon: "arrow.left.arrow.right", label: "Côté du compteur", selection: $settings.speedometerSide, options: valuesSpeedometerSide)
                        CustomButton(settings: settings, icon: "paintbrush", label: "Personnalisation") {
                            isShowingCustomization.toggle()
                        }
                        .sheet(isPresented: $isShowingCustomization) {
                            SettingsPersonalizationPage(settings: settings)
                        }
                        .accentColor(Color(getColor(for: settings.appTint)))
                    }
                    
                    Section(header: Text("Unités") .font(.custom("Universo-Regular", size: 12))) {
                        CustomSegmentedPicker(icon: "speedometer", label: "Vitesse", selection: $settings.speedUnit, options: valuesSpeedUnit)
                        CustomSegmentedPicker(icon: "ruler", label: "Distance", selection: $settings.distanceUnit, options: valuesDistanceUnit)
                        CustomMenuPickerColor(icon: "thermometer", label: "Température", selection: $settings.temperatureUnit, options: valuesTemperatureUnit)
                    }
                    
                    Section(header: Text("Application") .font(.custom("Universo-Regular", size: 12))) {
                        CustomMenuPickerColor(icon: "paintbrush", label: "Thème", selection: $settings.appAppearance, options: valuesAppAppearance)
                        CustomMenuPickerColor(icon: "paintpalette", label: "Teinte de l'app", selection: $settings.appTint, options: valuesColorThemes)
                    }
                }
            }
            .navigationTitle("‎‎ Réglages")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
