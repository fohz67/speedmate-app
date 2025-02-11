import SwiftUI

struct PersonalizationSheet: View {
    @EnvironmentObject var settings: SettingsModel
    
    var body: some View {
        VStack {
            Capsule()
                .frame(width: 40, height: 6)
                .padding(.top, 10)
                .padding(.bottom, 10)
                .foregroundColor(.gray)
            
            Form {
                PersonalizationSheetSectionPreview()
                PersonalizationSheetSectionGauge()
                PersonalizationSheetSectionLine()
                //PersonalizationSheetSectionSpeedLimit()
            }
        }
    }
}
