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
            .navigationTitle("Profil")
        }
        .onAppear {
            let appearance = UINavigationBarAppearance()
            appearance.backgroundEffect = UIBlurEffect(style: .systemUltraThinMaterial)
            UINavigationBar.appearance().scrollEdgeAppearance = appearance
        }
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
