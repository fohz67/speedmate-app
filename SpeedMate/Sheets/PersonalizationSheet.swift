import SwiftUI

struct PersonalizationSheet: View {
    @Environment(\.presentationMode) var presentationMode
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    PersonalizationSheetSectionPreview(settings: settings)
                    PersonalizationSheetSectionGauge(settings: settings)
                    PersonalizationSheetSectionLine(settings: settings)
                    PersonalizationSheetSectionSpeedLimit(settings: settings)
                }
            }
            .navigationTitle("Personnalisation")
            .navigationBarItems(
                trailing: Button("Fermer") {
                    presentationMode.wrappedValue.dismiss()
                }
                    .accentColor(Color(getColor(for: settings.appTint)))
            )
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
