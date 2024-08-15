import SwiftUI

struct CustomDragyNotReady: View {
    @EnvironmentObject var dragyManager: DragyManager

    var body: some View {
        VStack {
            Image(systemName: "exclamationmark.triangle")
                .resizable()
                .scaledToFit()
                .frame(width: 80, height: 80)
                .foregroundColor(.green)
            
            Text("Pas prêt")
                .font(
                    .custom("Universo-Black", size: 20)
                )
                .padding(.top, 26)
                .multilineTextAlignment(.center)
            
            Text("Vous devez être à l'arrêt pour démarrer le Dragy.")
                .font(
                    .custom("Universo-Bold", size: 16)
                )
                .foregroundColor(.secondary)
                .padding(.top, 8)
                .padding(.horizontal, 20)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Color(.systemBackground))
        .edgesIgnoringSafeArea(.all)
        .multilineTextAlignment(.center)
    }
}
