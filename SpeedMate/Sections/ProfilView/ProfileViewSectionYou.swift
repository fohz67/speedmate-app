import SwiftUI

struct ProfileViewSectionYou: View {
    @EnvironmentObject var profile: ProfileModel
    
    var body: some View {
        Section(
            header: Text("Toi")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
                .padding(.top, 25)
        ) {
            CustomTextField(
                icon: "person",
                label: "Prénom",
                text: $profile.firstName
            )
            
            CustomTextField(
                icon: "person.crop.square.filled.and.at.rectangle",
                label: "Nom de famille",
                text: $profile.lastName
            )
            
            CustomNumberSelector(
                icon: "birthday.cake",
                label: "Âge",
                value: $profile.age,
                range: 0...100,
                step: 1
            )
        }
    }
}
