import SwiftUI

struct ContentView: View {
    @ObservedObject var settings = SettingsModel()
    
    var body: some View {
        TabView {
            GPSView(settings: settings)
                .tabItem {
                    Image(systemName: "location.fill")
                    Text("GPS")
                }
            ProfileView(settings: settings)
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("Profil")
                }
            SettingsView(settings: settings)
                .tabItem {
                    Image(systemName: "gearshape.fill")
                    Text("Réglages")
                }
        }
        .accentColor(Color(getColor(for: settings.appTint)))
        .preferredColorScheme(getColorScheme(for: settings.appAppearance))
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
