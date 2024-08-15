import SwiftUI

struct CustomDragy: View {
    @EnvironmentObject var dragyManager: DragyManager

    var body: some View {
        Spacer()
        
        CustomGauge(
            speed: convertSpeed(
                speedUnit: _SPEED_UNIT,
                speed: dragyManager.speed
            ),
            gpsAccuracy: -67,
            temperature: -67,
            gForce: -67,
            size: 300
        )
        .padding()
        
        Spacer()
        
        CustomDragyboard()
        
        Spacer()
    }
}
