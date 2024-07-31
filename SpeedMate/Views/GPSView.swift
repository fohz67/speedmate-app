import SwiftUI

struct GPSView: View {
    @ObservedObject var locationManager = LocationManager()
    
    var body: some View {
        NavigationStack {
            VStack {
                Spacer()

                HStack {
                    VStack(alignment: .center, spacing: 30) {
                        CustomInfoView(label: "VITESSE MOY.", value: String(format: "%.2f", locationManager.averageSpeed), unit: "KM/H")
                        CustomInfoView(label: "DISTANCE", value: String(format: "%.2f", locationManager.totalDistance / 1000), unit: "KM")
                        CustomInfoView(label: "DURÉE", value: formattedTime(locationManager.rideTime), unit: "")
                    }
                    VStack(alignment: .center, spacing: 30) {
                        CustomInfoView(label: "VITESSE MAX", value: String(format: "%.0f", locationManager.maxSpeed), unit: "KM/H")
                        CustomInfoView(label: "ALTITUDE", value: String(format: "%.0f", locationManager.altitude), unit: "M")
                        CustomInfoView(label: "ARRÊTÉ", value: formattedTime(locationManager.stoppedTime), unit: "")
                    }
                }

                Spacer()
            }
            .navigationTitle("GPS")
            .font(.custom("Universo-Regular", size: 30))
        }
        .onAppear {
            let appearance = UINavigationBarAppearance()
            appearance.backgroundEffect = UIBlurEffect(style: .systemUltraThinMaterial)
            UINavigationBar.appearance().scrollEdgeAppearance = appearance
        }
    }
    
    func formattedTime(_ totalSeconds: TimeInterval) -> String {
        let hours = Int(totalSeconds) / 3600
        let minutes = Int(totalSeconds) % 3600 / 60
        let seconds = Int(totalSeconds) % 60
        return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
    }
}

struct GPSView_Previews: PreviewProvider {
    static var previews: some View {
        GPSView()
    }
}
