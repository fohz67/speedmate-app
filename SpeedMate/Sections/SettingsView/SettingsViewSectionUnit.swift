import SwiftUI

struct SettingsViewSectionUnits: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Unités")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPicker(
                icon: "speedometer",
                label: "Vitesse",
                selection: $settings.speedUnit,
                options: valuesSpeedUnit,
                unit: ""
            )
            
            CustomPicker(
                icon: "ruler",
                label: "Distance",
                selection: $settings.distanceUnit,
                options: valuesDistanceUnit,
                unit: ""
            )
            
            CustomPicker(
                icon: "arrow.up",
                label: "Altitude",
                selection: $settings.altitudeUnit,
                options: valuesAltitudeUnit,
                unit: ""
            )
            
            CustomPicker(
                icon: "thermometer",
                label: "Température",
                selection: $settings.temperatureUnit,
                options: valuesTemperatureUnit,
                unit: ""
            )
        }
    }
}
