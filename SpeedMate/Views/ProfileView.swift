import SwiftUI

struct ProfileView: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        NavigationStack {
            VStack {
            }
            .navigationTitle("‎ Profil")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
