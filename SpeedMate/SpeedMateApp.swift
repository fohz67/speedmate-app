import SwiftUI

@main
struct SpeedMateApp: App {
    @StateObject var settings = SettingsModel()
    @StateObject var profile = ProfileModel()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(settings)
                .environmentObject(profile)
                .onAppear {
                    if settings.antiWake {
                        UIApplication.shared.isIdleTimerDisabled = true
                    }
                }
                .onDisappear {
                    UIApplication.shared.isIdleTimerDisabled = false
                }
        }
    }
}
