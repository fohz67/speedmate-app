import SwiftUI

struct SettingsViewSectionGauge: View {
    @EnvironmentObject var settings: SettingsModel
    
    @State private var isShowingCustomization = false
    
    var body: some View {
        Section(
            header: Text("Compteur")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
                .padding(.top, 25)
        ) {
            CustomToggle(
                icon: "location.circle",
                label: "Afficher la précision GPS",
                isOn: $settings.showGPSPrecision
            )
            
            CustomPicker(
                icon: "arrow.left.arrow.right",
                label: "Côté du compteur",
                selection: $settings.speedometerSide,
                options: valuesSpeedometerSide,
                unit: ""
            )
            .blur(radius: 4)
            
            CustomText(label: "Lorsque l'application est en mode paysage.")
            
            CustomButton(
                icon: "paintbrush",
                label: "Personnalisation"
            ) {
                isShowingCustomization.toggle()
            }
            .sheet(isPresented: $isShowingCustomization) {
                PersonalizationSheet()
            }
            .accentColor(getAppTint(settings: settings))
        }
    }
}
