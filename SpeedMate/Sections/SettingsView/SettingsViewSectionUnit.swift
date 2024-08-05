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
