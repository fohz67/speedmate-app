import SwiftUI
import SDWebImageSwiftUI

struct ProfileView: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        NavigationStack {
            VStack {
                CustomText(label: "Pas encore terminé je fais dodo là")
                
                VStack {
                    WebImage(url: URL(string: "https://media1.tenor.com/m/gA3nv4x0nh0AAAAd/cat-grumpy.gif"))
                        .onSuccess { image, data, cacheType in
                        }
                        .resizable()
                        .scaledToFit()
                        .frame(width: .infinity, height: .infinity)
                }
            }
            .navigationTitle("‎ Profil")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
