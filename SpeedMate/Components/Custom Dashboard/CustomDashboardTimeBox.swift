import SwiftUI

struct CustomDashboardTimeBox: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager

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
                                            
                Image(systemName: "chevron.right")
                    .foregroundColor(Color(getColor(settings.appTint)))
                    .padding(.horizontal, 10)
            }
            .padding()
            .background(Color(.systemBackground))
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(Color(getColor(settings.appTint)), lineWidth: 1)
            )
        }
        .padding(.top, 15)
    }
    
    private func formattedTime(_ totalSeconds: TimeInterval) -> String {
        let hours = Int(totalSeconds) / 3600
        let minutes = Int(totalSeconds) % 3600 / 60
        let seconds = Int(totalSeconds) % 60

        return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
    }
}
