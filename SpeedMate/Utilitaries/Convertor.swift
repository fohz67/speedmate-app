import SwiftUI

func metersPerSecondToKilometersPerHour(metersPerSecond: Double) -> Double {
    return metersPerSecond * 3.6
}

func metersPerSecondToMilesPerHour(metersPerSecond: Double) -> Double {
    return metersPerSecond * 2.23694
}

func metersToKilometers(meters: Double) -> Double {
    return meters / 1000
}

func metersToMiles(meters: Double) -> Double {
    return meters / 1609.344
}

func metersToFeet(meters: Double) -> Double {
    return meters * 3.28084
}

func metersToYards(meters: Double) -> Double {
    return meters * 1.09361
}

func celsiusToFahrenheit(celsius: Double) -> Double {
    return (celsius * 9/5) + 32
}

func convertSpeed(speedUnit: String, speed: Double) -> Double {
    if speedUnit == "Mph" {
        return metersPerSecondToMilesPerHour(metersPerSecond: speed)
    } else {
        return metersPerSecondToKilometersPerHour(metersPerSecond: speed)
    }
}

func convertTotalDistance(distanceUnit: String, totalDistance: Double) -> Double {
    if distanceUnit == "Miles" {
        return metersToMiles(meters: totalDistance)
    } else {
        return metersToKilometers(meters: totalDistance)
    }
}

func convertAltitude(altitudeUnit: String, altitude: Double) -> Double {
    if altitudeUnit == "Feet" {
        return metersToFeet(meters: altitude)
    } else {
        return altitude
    }
}

func convertTemperature(temperatureUnit: String, temperature: Double) -> Double {
    if temperatureUnit == "Celsius" {
        return temperature
    } else {
        return celsiusToFahrenheit(celsius: temperature)
    }
}

func formattedDuration(_ totalSeconds: TimeInterval) -> String {
    let days = Int(totalSeconds) / 86400
    let hours = (Int(totalSeconds) % 86400) / 3600
    let minutes = (Int(totalSeconds) % 3600) / 60
    let seconds = Int(totalSeconds) % 60
    
    return String(format: "%02dj %02dh %02dm %02ds", days, hours, minutes, seconds)
}

func formattedTime(_ totalSeconds: TimeInterval) -> String {
    let hours = Int(totalSeconds) / 3600
    let minutes = Int(totalSeconds) % 3600 / 60
    let seconds = Int(totalSeconds) % 60
    
    return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
}
