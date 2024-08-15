import SwiftUI

struct CustomDashboard: View {
    @EnvironmentObject var settings: SettingsModel
    @EnvironmentObject var locationManager: LocationManager
    
    var body: some View {
        VStack {
            HStack {
                Spacer()
                
                CustomDashboardLeftColumn()
                
                Spacer()
                
                CustomDashboardRightColumn()
                
                Spacer()
            }
            
            CustomDashboardTimeBox()
        }
    }
}
