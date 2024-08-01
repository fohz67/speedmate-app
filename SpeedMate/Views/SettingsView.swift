import SwiftUI

struct SettingsView: View {
    @ObservedObject var settings: SettingsModel
    
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    SettingsViewSectionGauge(settings: settings)
                    SettingsViewSectionUnits(settings: settings)
                    SettingsViewSectionApplication(settings: settings)
                }
            }
            .navigationTitle("‎‎ Réglages")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
