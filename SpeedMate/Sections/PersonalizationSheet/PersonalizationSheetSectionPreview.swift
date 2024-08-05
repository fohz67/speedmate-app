import SwiftUI

struct PersonalizationSheetSectionPreview: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        Section(
            header: Text("Prévisualisation")
                .font(
                    .custom("Universo-Regular", size: 12)
                )
        ) {
            HStack {
                Spacer()
                
                CustomGauge(
                    speed: Double(settings.gaugeMaximumSpeed),
                    gpsAccuracy: -67,
                    temperature: -67,
                    size: 160
                )
                
                Spacer()
            }
        }
    }
}
