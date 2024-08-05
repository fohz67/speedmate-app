import SwiftUI

struct ProfileView: View {    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    ProfileViewSectionYou()
                    ProfileViewSectionVehicle()
                    ProfileViewSectionStatistics()
                }
            }
            .navigationTitle("‎ Profil")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
