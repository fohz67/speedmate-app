import SwiftUI

struct ContentView: View {
    @EnvironmentObject var settings: SettingsModel
    
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
        .accentColor(getAppTint(settings: settings))
        .preferredColorScheme(getColorScheme(appAppearance: settings.appAppearance))
    }
}
