import SwiftUI

struct SettingsViewSectionGauge: View {
    @ObservedObject var settings: SettingsModel
    @State private var isShowingCustomization = false

    var body: some View {
        Section(
            header: Text("Compteur de vitesse")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
                .padding(.top, 25)
        ) {
            CustomToggle(
                settings: settings,
                icon: "location.circle",
                label: "Afficher la précision GPS",
                isOn: $settings.showGPSPrecision
            )
            
            CustomSegmentedPicker(
                settings: settings,
                icon: "arrow.left.arrow.right",
                label: "Côté du compteur",
                selection: $settings.speedometerSide,
                options: valuesSpeedometerSide
            )
            
            CustomText(label: "Lorsque l'application est en mode paysage.")
            
            CustomButton(
                settings: settings,
                icon: "paintbrush",
                label: "Personnalisation"
            ) {
                isShowingCustomization.toggle()
            }
            .sheet(isPresented: $isShowingCustomization) {
                PersonalizationSheet(settings: settings)
            }
            .accentColor(Color(getColor(for: settings.appTint)))
        }
    }
}

struct SettingsViewSectionUnits: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Unités")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomSegmentedPicker(
                settings: settings,
                icon: "speedometer",
                label: "Vitesse",
                selection: $settings.speedUnit,
                options: valuesSpeedUnit
            )
            
            CustomSegmentedPicker(
                settings: settings,
                icon: "ruler",
                label: "Distance",
                selection: $settings.distanceUnit,
                options: valuesDistanceUnit
            )
            
            CustomMenuPickerColor(
                settings: settings,
                icon: "thermometer",
                label: "Température",
                selection: $settings.temperatureUnit,
                options: valuesTemperatureUnit
            )
        }
    }
}

struct SettingsViewSectionApplication: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Application")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomMenuPickerColor(
                settings: settings,
                icon: "paintbrush",
                label: "Thème",
                selection: $settings.appAppearance,
                options: valuesAppAppearance
            )
            
            CustomMenuPickerColor(
                settings: settings,
                icon: "paintpalette",
                label: "Teinte de l'app",
                selection: $settings.appTint,
                options: valuesColorThemes
            )
            
            CustomToggle(
                settings: settings,
                icon: "arrow.triangle.2.circlepath",
                label: "Synchroniser les teintes de l'app et du compteur",
                isOn: $settings.appTintSync
            )
        }
    }
}
