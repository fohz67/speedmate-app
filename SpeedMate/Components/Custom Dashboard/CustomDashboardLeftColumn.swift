import SwiftUI

struct CustomDashboardLeftColumn: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    var body: some View {
        VStack(alignment: .center, spacing: 30) {
            CustomInfo(
                label: "VITESSE MOY.",
                value: String(format: "%.0f", convertSpeed(
                    settings.speedUnit,
                    locationManager.averageSpeed
                )),
                unit: settings.speedUnit.uppercased()
            )
            
            CustomInfo(
                label: "DISTANCE",
                value: String(format: "%.2f", convertTotalDistance(
                    distanceUnit: settings.distanceUnit,
                    totalDistance: locationManager.totalDistance
                )),
                unit: settings.distanceUnit.uppercased()
            )
        }
    }
}
