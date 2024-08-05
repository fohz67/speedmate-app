import SwiftUI

struct CustomDashboardTimeBox: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    @State private var isPressed = false
    @State private var showSheet = false
    
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
                    .foregroundColor(getAppTint(settings: settings))
                    .padding(.horizontal, 10)
            }
            .padding()
            .background(Color(.systemBackground))
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(getAppTint(settings: settings), lineWidth: 1)
            )
        }
        .onTapGesture {
            showSheet = true
        }
        .sheet(isPresented: $showSheet) {
            DashboardTimerSheet()
        }
        .padding(.top, 15)
        .pushDownAnimation()
    }
    
    private func formattedTime(_ totalSeconds: TimeInterval) -> String {
        let hours = Int(totalSeconds) / 3600
        let minutes = Int(totalSeconds) % 3600 / 60
        let seconds = Int(totalSeconds) % 60
        
        return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
    }
}
