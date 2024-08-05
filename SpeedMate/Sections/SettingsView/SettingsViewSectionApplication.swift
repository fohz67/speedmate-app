import SwiftUI

struct SettingsViewSectionApplication: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Application")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomToggle(
                icon: "moon",
                label: "Empêcher la mise en veille",
                isOn: $settings.antiWake
            )
        }
    }
}
