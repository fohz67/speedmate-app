import SwiftUI

struct CustomDragyboard: View {
    @EnvironmentObject var dragyManager: DragyManager
    
    var body: some View {
        VStack(alignment: .center, spacing: 30) {
            CustomInfo(
                label: "FORCE G",
                value: String(format: "%.2f", dragyManager.gForce),
                unit: "G"
            )
            
            CustomInfo(
                label: "CHRONOMÈTRE",
                value: String(format: "%.2f", dragyManager.elapsedTime),
                unit: "s"
            )
        }
    }
}
