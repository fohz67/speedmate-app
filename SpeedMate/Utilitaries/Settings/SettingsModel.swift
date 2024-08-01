import SwiftUI

class SettingsModel: ObservableObject {
    // Compteur de vitesse
    @AppStorage("showGPSPrecision") var showGPSPrecision = true
    @AppStorage("speedometerSide") var speedometerSide = "Gauche"
    
    // Unités
    @AppStorage("speedUnit") var speedUnit = "Km/h"
    @AppStorage("distanceUnit") var distanceUnit = "Km"
    @AppStorage("temperatureUnit") var temperatureUnit = "Celsius"
    
    // Application
    @AppStorage("appAppearance") var appAppearance = "Auto"
    @AppStorage("appTint") var appTint = "Violet"
    @AppStorage("appTintSync") var appTintSync = true

    // Personnalisation
    
    // Compteur
    @AppStorage("showGaugeBackground") var showGaugeBackground = true
    @AppStorage("showGaugeSpeedIndicators") var showGaugeSpeedIndicators = true

    // Courbe
    @AppStorage("showGaugeLine") var showGaugeLine = true
    @AppStorage("gaugeMaximumSpeed") var gaugeMaximumSpeed = "200"
    @AppStorage("gaugeStyleCorner") var gaugeStyleCorner = "Arrondi"
    @AppStorage("gaugeTintStyle") var gaugeTintStyle = "Dégradé"
    @AppStorage("gaugeTintColor") var gaugeTintColor = "Violet"
    @AppStorage("gaugeTintGradient") var gaugeTintGradient = "Violet"
    
    // Limitation de vitesse
    @AppStorage("showGaugeSpeedLimit") var showGaugeSpeedLimit = false
    @AppStorage("gaugeSpeedLimit") var gaugeSpeedLimit = "100"
    @AppStorage("showGaugeSpeedLimitFlash") var showGaugeSpeedLimitFlash = false
    @AppStorage("showGaugeSpeedLimitSound") var showGaugeSpeedLimitSound = false
}
