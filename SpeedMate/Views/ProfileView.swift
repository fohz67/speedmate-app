import SwiftUI

struct ProfileView: View {
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
            configureNavigationBarAppearance()
        }
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
