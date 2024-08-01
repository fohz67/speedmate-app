import SwiftUI

class SettingsModel: ObservableObject {
    @AppStorage("showGPSPrecision") var showGPSPrecision = true
    @AppStorage("showAnimation") var showAnimation = true
    @AppStorage("speedometerSide") var speedometerSide = "Gauche"

    @AppStorage("speedUnit") var speedUnit = "Km/h"
    @AppStorage("distanceUnit") var distanceUnit = "Km"
    @AppStorage("temperatureUnit") var temperatureUnit = "Celsius"
    
    @AppStorage("appAppearance") var appAppearance = "Auto"
    
    @AppStorage("showGaugeBackground") var showGaugeBackground = true
    @AppStorage("showGaugeSpeedIndicators") var showGaugeSpeedIndicators = true
    
    @AppStorage("gaugeStyleCorner") var gaugeStyleCorner = "Arrondi"
    @AppStorage("gaugeColorStyle") var gaugeColorStyle = "Dégradé"
    @AppStorage("gaugeColor") var gaugeColor = "Violet"
    @AppStorage("gaugeGradiant") var gaugeGradiant = "Violet"
    @AppStorage("speedTextSize") var speedTextSize = "90%"
    @AppStorage("unitTextSize") var unitTextSize = "20%"
    @AppStorage("gaugeMaximumSpeed") var gaugeMaximumSpeed = "200"
    @AppStorage("gaugeSpeedLimit") var gaugeSpeedLimit = false
    @AppStorage("gaugeSpeedLimitNumber") var gaugeSpeedLimitNumber = "100"
    @AppStorage("gaugeSpeedLimitFlash") var gaugeSpeedLimitFlash = false
    @AppStorage("gaugeSpeedLimitSound") var gaugeSpeedLimitSound = false
}
