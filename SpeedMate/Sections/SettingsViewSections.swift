import SwiftUI

struct SettingsViewSectionGauge: View {
    @EnvironmentObject var settings: SettingsModel

    @State private var isShowingCustomization = false

    var body: some View {
        Section(
            header: Text("Compteur")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
                .padding(.top, 25)
        ) {
            CustomToggle(
                icon: "location.circle",
                label: "Afficher la précision GPS",
                isOn: $settings.showGPSPrecision
            )
            
            CustomPickerSegmented(
                icon: "arrow.left.arrow.right",
                label: "Côté du compteur",
                selection: $settings.speedometerSide,
                options: valuesSpeedometerSide,
                unit: ""
            )
            .blur(radius: 4)
            
            CustomText(label: "Lorsque l'application est en mode paysage.")
            
            CustomButton(
                icon: "paintbrush",
                label: "Personnalisation"
            ) {
                isShowingCustomization.toggle()
            }
            .sheet(isPresented: $isShowingCustomization) {
                PersonalizationSheet()
            }
            .accentColor(Color(getColor(settings.appTint)))
        }
    }
}

struct SettingsViewSectionNavigation: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Navigation")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPickerMenu(
                icon: "navigation",
                label: "Vitesse de mise en route",
                selection: $settings.navigationStartingSpeed,
                options: valuesStartingSpeed,
                unit: settings.speedUnit
            )
        }
    }
}

struct SettingsViewSectionUnits: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Unités")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPickerSegmented(
                icon: "speedometer",
                label: "Vitesse",
                selection: $settings.speedUnit,
                options: valuesSpeedUnit,
                unit: ""
            )
            
            CustomPickerSegmented(
                icon: "ruler",
                label: "Distance",
                selection: $settings.distanceUnit,
                options: valuesDistanceUnit,
                unit: ""
            )
            
            CustomPickerSegmented(
                icon: "arrow.up",
                label: "Altitude",
                selection: $settings.altitudeUnit,
                options: valuesAltitudeUnit,
                unit: ""
            )
            
            CustomPickerMenu(
                icon: "thermometer",
                label: "Température",
                selection: $settings.temperatureUnit,
                options: valuesTemperatureUnit,
                unit: ""
            )
        }
    }
}

struct SettingsViewSectionTheming: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Thème")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPickerMenu(
                icon: "iphone",
                label: "Apparence",
                selection: $settings.appAppearance,
                options: valuesAppAppearance,
                unit: ""
            )
            
            CustomPickerMenu(
                icon: "paintpalette",
                label: "Teinte",
                selection: $settings.appTint,
                options: valuesColorThemes,
                unit: ""
            )
            
            CustomToggle(
                icon: "arrow.triangle.2.circlepath",
                label: "Synchroniser l'app et le compteur",
                isOn: $settings.appTintSync
            )
        }
    }
}

struct SettingsViewSectionApplication: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Application")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                icon: "moon",
                label: "Empêcher la mise en veille",
                isOn: $settings.antiWake
            )
        }
    }
}
