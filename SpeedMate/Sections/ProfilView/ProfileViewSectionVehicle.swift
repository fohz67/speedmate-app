import SwiftUI

struct ProfileViewSectionVehicle: View {
    @EnvironmentObject var profile: ProfileModel
    
    var body: some View {
        Section(
            header: Text("Véhicule")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomPicker(
                icon: "car",
                label: "Type",
                selection: $profile.vehicleType,
                options: valuesVehicleTypes,
                unit: ""
            )
            
            CustomTextField(
                icon: "star",
                label: "Marque",
                text: $profile.vehicleBrand
            )
            
            CustomTextField(
                icon: "doc.text.fill",
                label: "Modèle",
                text: $profile.vehicleModel
            )
        }
    }
}
