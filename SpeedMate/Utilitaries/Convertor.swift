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
