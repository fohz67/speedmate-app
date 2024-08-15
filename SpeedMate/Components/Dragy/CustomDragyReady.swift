import SwiftUI

struct CustomDragyReady: View {
    @EnvironmentObject var dragyManager: DragyManager
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        VStack {
            Image(systemName: "checkmark.circle")
                .resizable()
                .scaledToFit()
                .frame(width: 80, height: 80)
                .foregroundColor(.green)
            
            Text("Prêt au lancement")
                .font(
                    .custom("Universo-Black", size: 20)
                )
                .padding(.top, 26)
                .multilineTextAlignment(.center)
            
            Text("Accélerez pour lancer automatiquement le Dragy ou appuyez sur le bouton pour un démarrage après un décompte de 10 secondes.")
                .font(
                    .custom("Universo-Bold", size: 16)
                )
                .foregroundColor(.secondary)
                .padding(.top, 8)
                .padding(.horizontal, 20)
                .multilineTextAlignment(.center)
            
            Button(action: {
                dragyManager.startSession()
            }) {
                Text("Démarrer à la réaction")
                    .font(.custom("Universo-Bold", size: 16))
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color(.systemBackground))
                    .foregroundColor(getAppTint(settings: settings))
                    .overlay(
                        RoundedRectangle(cornerRadius: 15)
                            .stroke(getAppTint(settings: settings), lineWidth: 1)
                    )
            }
            .padding(.top, 30)
            .padding(.horizontal, 40)
            .pushDownAnimation()
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(Color(.systemBackground))
        .edgesIgnoringSafeArea(.all)
    }
}
