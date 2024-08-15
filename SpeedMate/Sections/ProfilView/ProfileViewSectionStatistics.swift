import SwiftUI

struct ProfileViewSectionStatistics: View {
    @EnvironmentObject var profile: ProfileModel
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Statistiques")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            CustomTextLabel(
                icon: "figure.walk",
                label: "Odomètre",
                text: (String(format: "%.2f", convertTotalDistance(distanceUnit: settings.distanceUnit, totalDistance: profile.odometer)) + " " + settings.distanceUnit)
            )
            
            CustomTextLabel(
                icon: "play",
                label: "Temps roulé",
                text: formattedDuration(profile.rideTime)
            )
            
            CustomTextLabel(
                icon: "pause",
                label: "Temps arrêté",
                text: formattedDuration(profile.stoppedTime)
            )
            
            CustomTextLabel(
                icon: "clock",
                label: "Temps total",
                text: formattedDuration(profile.rideTime + profile.stoppedTime)
            )
        }
    }
}
