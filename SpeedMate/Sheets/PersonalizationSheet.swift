import SwiftUI

struct PersonalizationSheet: View {
    @EnvironmentObject var settings: SettingsModel
    @Environment(\.presentationMode) var presentationMode
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    PersonalizationSheetSectionPreview()
                    PersonalizationSheetSectionGauge()
                    PersonalizationSheetSectionLine()
                    PersonalizationSheetSectionSpeedLimit()
                }
            }
            .navigationTitle("Personnalisation")
            .navigationBarItems(
                trailing: Button("Fermer") {
                    presentationMode.wrappedValue.dismiss()
                }
                    .accentColor(Color(getColor(settings.appTint)))
            )
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
