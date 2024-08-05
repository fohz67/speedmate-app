import SwiftUI

struct ProfileViewSectionVehicle: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Véhicule")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            // @TODO
        }
    }
}
