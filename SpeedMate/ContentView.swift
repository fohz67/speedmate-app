import SwiftUI

struct ContentView: View {
    @ObservedObject var settings = SettingsModel()
    
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
        .accentColor(.purple)
        .preferredColorScheme(getColorScheme())
    }
    
    private func getColorScheme() -> ColorScheme? {
        switch settings.appAppearance {
        case "Clair":
            return .light
        case "Sombre":
            return .dark
        default:
            return nil
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
