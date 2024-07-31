import SwiftUI

class SettingsModel: ObservableObject {
    @AppStorage("showGPSPrecision") var showGPSPrecision = true
    @AppStorage("showAnimation") var showAnimation = true
    @AppStorage("speedUnit") var speedUnit = "Km/h"
    @AppStorage("distanceUnit") var distanceUnit = "Km"
    @AppStorage("temperatureUnit") var temperatureUnit = "Celsius"
    @AppStorage("appAppearance") var appAppearance = "Auto"
    @AppStorage("speedometerSide") var speedometerSide = "Gauche"
}
