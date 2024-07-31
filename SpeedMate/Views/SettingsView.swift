import SwiftUI

struct SettingsView: View {
    @ObservedObject var settings = SettingsModel()
    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    Section(header: Text("Compteur de vitesse")) {
                        CustomToggle(icon: "location.circle", label: "Afficher la précision GPS", isOn: $settings.showGPSPrecision)
                        CustomToggle(icon: "waveform.path.ecg", label: "Afficher les animations", isOn: $settings.showAnimation)
                        CustomSegmentedPicker(icon: "arrow.left.arrow.right", label: "Côté du compteur", selection: $settings.speedometerSide, options: ["Gauche", "Droite"])
                    }
                    
                    Section(header: Text("Unités")) {
                        CustomSegmentedPicker(icon: "speedometer", label: "Vitesse", selection: $settings.speedUnit, options: ["Km/h", "Mph"])
                        CustomSegmentedPicker(icon: "ruler", label: "Distance", selection: $settings.distanceUnit, options: ["Km", "Miles"])
                        CustomMenuPickerColor(icon: "thermometer", label: "Température", selection: $settings.temperatureUnit, options: ["Celsius", "Fahrenheit"])
                    }
                    
                    Section(header: Text("Application")) {
                        CustomMenuPickerColor(icon: "paintbrush", label: "Thème", selection: $settings.appAppearance, options: ["Auto", "Clair", "Sombre"])
                    }
                }
            }
            .navigationTitle("Réglages")
        }
        .onAppear {
            let appearance = UINavigationBarAppearance()
            appearance.backgroundEffect = UIBlurEffect(style: .systemUltraThinMaterial)
            UINavigationBar.appearance().scrollEdgeAppearance = appearance
        }
    }
}

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
