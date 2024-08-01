import SwiftUI

struct ProfileView: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    Section(header: Text("Toi")) {
                        
                    }
                    
                    Section(header: Text("Véhicule")) {
                        
                    }
                    
                    Section(header: Text("Statistiques")) {
                        
                    }
                }
            }
            .navigationTitle("‎ Profil")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
