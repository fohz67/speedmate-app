import SwiftUI

struct SettingsViewSectionNavigation: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Navigation")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomNumberSelector(
                icon: "navigation",
                label: "Vitesse de mise en route",
                value: $settings.navigationStartingSpeed,
                range: 5...50,
                step: 1
            )
        }
    }
}
