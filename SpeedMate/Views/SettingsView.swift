import SwiftUI

struct SettingsView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Form {
                    SettingsViewSectionGauge()
                    SettingsViewSectionMetrics()
                    SettingsViewSectionUnits()
                    SettingsViewSectionTheming()
                    SettingsViewSectionApplication()
                }
            }
            .navigationTitle("‎‎ Réglages")
        }
        .onAppear {
            getNavigationStyle()
        }
    }
}
