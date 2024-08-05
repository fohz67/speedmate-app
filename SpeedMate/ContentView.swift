import SwiftUI

struct ContentView: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    var body: some View {
        TabView {
            GPSView()
                .tabItem {
                    Image(systemName: "location.fill")
                    Text("GPS")
                }
            ProfileView()
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("Profil")
                }
            SettingsView()
                .tabItem {
                    Image(systemName: "gearshape.fill")
                    Text("Réglages")
                }
        }
        .accentColor(Color(getColor(settings.appTint)))
        .preferredColorScheme(getColorScheme(settings.appAppearance))
    }
}
