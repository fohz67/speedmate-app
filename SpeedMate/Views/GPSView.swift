import SwiftUI

struct GPSView: View {
    @ObservedObject var locationManager = LocationManager()
    
    var body: some View {
        NavigationStack {
            VStack(spacing: 20) {
                Text("Current Speed: \(locationManager.speed, specifier: "%.2f") m/s")
                Text("Max Speed: \(locationManager.maxSpeed, specifier: "%.2f") m/s")
                Text("Average Speed: \(locationManager.averageSpeed, specifier: "%.2f") m/s")
                Text("Altitude: \(locationManager.altitude, specifier: "%.2f") m")
                Text("Ride Time: \(formattedTime(locationManager.rideTime))")
                Text("Stopped Time: \(formattedTime(locationManager.stoppedTime))")
            }
            .navigationTitle("GPS")
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
