import SwiftUI

struct CustomDashboardRightColumn: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    var body: some View {
        VStack(alignment: .center, spacing: 30) {
            CustomInfo(
                label: "VITESSE MAX",
                value: String(format: "%.0f", convertSpeed(settings.speedUnit, locationManager.maxSpeed)),
                unit: settings.speedUnit.uppercased()
            )
            
            CustomInfo(
                label: "ALTITUDE",
                value: String(format: "%.0f", convertAltitude(
                    altitudeUnit: settings.altitudeUnit,
                    altitude: locationManager.altitude
                )),
                unit: settings.altitudeUnit.uppercased()
            )
        }
    }
}
