import SwiftUI

var _SPEED_UNIT: String = "Km/h"
var _NAVIGATION_STARTING_SPEED: Int = 15

class SettingsModel: ObservableObject {
    // Compteur de vitesse
    @AppStorage("speedometerSide") var speedometerSide = "Gauche"
    
    // Métriques
    @AppStorage("GPSPrecisionPosition") var GPSPrecisionPosition = "En haut à gauche"
    @AppStorage("temperaturePosition") var temperaturePosition = "En haut à droite"

    // Unités
    @AppStorage("speedUnit") var speedUnit = "Km/h" {
        didSet {
            _SPEED_UNIT = speedUnit
        }
    }
    @AppStorage("distanceUnit") var distanceUnit = "Km"
    @AppStorage("temperatureUnit") var temperatureUnit = "Celsius"
    @AppStorage("altitudeUnit") var altitudeUnit = "M"
    
    // Navigation
    @AppStorage("navigationStartingSpeed") var navigationStartingSpeed = 15 {
        didSet {
            _NAVIGATION_STARTING_SPEED = navigationStartingSpeed
        }
    }
    
    // Thème
    @AppStorage("appAppearance") var appAppearance = "Auto"
    @AppStorage("appTint") var appTint = "Jaune"
    @AppStorage("appTintSync") var appTintSync = true
    
    // Application
    @AppStorage("antiWake") var antiWake = true

    
    // Personnalisation
    
    // Compteur
    @AppStorage("showGaugeBackground") var showGaugeBackground = true
    @AppStorage("showGaugeSpeedIndicators") var showGaugeSpeedIndicators = true
    
    // Courbe
    @AppStorage("showGaugeLine") var showGaugeLine = true
    @AppStorage("gaugeMaximumSpeed") var gaugeMaximumSpeed = 200
    @AppStorage("gaugeStyleCorner") var gaugeStyleCorner = "Arrondi"
    @AppStorage("gaugeTintStyle") var gaugeTintStyle = "Dégradé"
    @AppStorage("gaugeTintColor") var gaugeTintColor = "Jaune"
    @AppStorage("gaugeTintGradient") var gaugeTintGradient = "Jaune"
    
    // Limitation de vitesse
    @AppStorage("showGaugeSpeedLimit") var showGaugeSpeedLimit = false
    @AppStorage("gaugeSpeedLimit") var gaugeSpeedLimit = 100
    @AppStorage("showGaugeSpeedLimitFlash") var showGaugeSpeedLimitFlash = false
    @AppStorage("showGaugeSpeedLimitSound") var showGaugeSpeedLimitSound = false
}
