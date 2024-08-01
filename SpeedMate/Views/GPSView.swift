import SwiftUI

struct GPSView: View {
    @ObservedObject var settings: SettingsModel
    @ObservedObject var locationManager = LocationManager()
    
    var body: some View {
        NavigationStack {
            VStack {
                Spacer()
                CustomGauge(settings: settings, speed: locationManager.speed, size: 300)
                Spacer()
                CustomDashboard(settings: settings, locationManager: locationManager)
                Spacer()
            }
        }
    }
}
