import SwiftUI

struct CustomDashboard: View {
    @ObservedObject var settings: SettingsModel
    @ObservedObject var locationManager: LocationManager
    
    var body: some View {
        HStack {
            Spacer()
            VStack(alignment: .center, spacing: 30) {
                CustomInfo(settings: settings, label: "VITESSE MOY.", value: String(format: "%.0f", locationManager.averageSpeed), unit: "KM/H")
                CustomInfo(settings: settings, label: "DISTANCE", value: String(format: "%.2f", locationManager.totalDistance / 1000), unit: "KM")
                CustomInfo(settings: settings, label: "DURÉE", value: formattedTime(locationManager.rideTime), unit: "")
            }
            Spacer()
            VStack(alignment: .center, spacing: 30) {
                CustomInfo(settings: settings, label: "VITESSE MAX", value: String(format: "%.0f", locationManager.maxSpeed), unit: "KM/H")
                CustomInfo(settings: settings, label: "ALTITUDE", value: String(format: "%.0f", locationManager.altitude), unit: "M")
                CustomInfo(settings: settings, label: "ARRÊTÉ", value: formattedTime(locationManager.stoppedTime), unit: "")
            }
            Spacer()
        }
    }
    
    private func formattedTime(_ totalSeconds: TimeInterval) -> String {
        let hours = Int(totalSeconds) / 3600
        let minutes = Int(totalSeconds) % 3600 / 60
        let seconds = Int(totalSeconds) % 60
        return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
    }
}
