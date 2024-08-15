import SwiftUI

struct CustomDashboardTimeBox: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    @State private var isPressed = false
    
    var body: some View {
        HStack {
            HStack {
                CustomInfo(
                    label: "DURÉE",
                    value: formattedTime(locationManager.rideTime),
                    unit: ""
                )
                
                CustomInfo(
                    label: "ARRÊTÉ",
                    value: formattedTime(locationManager.stoppedTime),
                    unit: ""
                )
            }
            .padding()
            .background(Color(.systemBackground))
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(getAppTint(settings: settings), lineWidth: 1)
            )
        }
        .padding(.top, 15)
        .pushDownAnimation()
    }
}
