import SwiftUI

var _SPEED_UNIT: String = "Km/h"
var _TEMPERATURE_UNIT: String = "Celsius"
var _NAVIGATION_STARTING_SPEED: Double = 15

class SettingsModel: ObservableObject {
    // Compteur de vitesse
    @AppStorage("showGPSPrecision") var showGPSPrecision = true
    @AppStorage("speedometerSide") var speedometerSide = "Gauche"
    
    // Unités
    @AppStorage("speedUnit") var speedUnit = "Km/h" {
        didSet {
            _SPEED_UNIT = speedUnit
        }
    }
    @AppStorage("distanceUnit") var distanceUnit = "Km"
    @AppStorage("temperatureUnit") var temperatureUnit = "Celsius" {
        didSet {
            _TEMPERATURE_UNIT = temperatureUnit
        }
    }
    @AppStorage("altitudeUnit") var altitudeUnit = "M"
    
    // Navigation
    @AppStorage("navigationStartingSpeed") var navigationStartingSpeed = "15" {
        didSet {
            _NAVIGATION_STARTING_SPEED = (Double(navigationStartingSpeed) ?? 15)
        }
    }
    
    // Application
    @AppStorage("appAppearance") var appAppearance = "Auto"
    @AppStorage("antiWake") var antiWake = true
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
