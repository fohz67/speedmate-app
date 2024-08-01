import SwiftUI

struct GPSView: View {
    @StateObject var settings = SettingsModel()
    @ObservedObject var locationManager = LocationManager()
    
    var body: some View {
        NavigationStack {
            VStack {
                CustomGauge(currentValue: locationManager.speed, frameSize: 300)
                Spacer()
                CustomDashboard(locationManager: locationManager)
                Spacer()
            }
            .navigationTitle("GPS")
        }
        .onAppear {
            configureNavigationBarAppearance()
        }
    }
}

struct GPSView_Previews: PreviewProvider {
    static var previews: some View {
        GPSView()
    }
}
