import SwiftUI

struct DragyView: View {
    @StateObject var dragyManager = DragyManager()
    
    var body: some View {
        NavigationStack {
            VStack {
                switch dragyManager.state {
                case .idle:
                    if dragyManager.speed > 1 {
                        CustomDragyNotReady()
                    } else {
                        CustomDragyReady()
                    }
                case .running:
                    CustomDragy()
                case .finished:
                    // @TODO
                    CustomDragy()
                }
            }
            .navigationTitle("Dragy")
        }
        .environmentObject(dragyManager)
        .onAppear {
            getNavigationStyle()
            dragyManager.startTracking()
        }
        .onDisappear {
            dragyManager.stopTracking()
        }
    }
}
