func metersPerSecondToKilometersPerHour(_ metersPerSecond: Double) -> Double {
    return metersPerSecond * 3.6
}

func metersPerSecondToMilesPerHour(_ metersPerSecond: Double) -> Double {
    return metersPerSecond * 2.23694
}

func metersToKilometers(_ meters: Double) -> Double {
    return meters / 1000
}

func metersToMiles(_ meters: Double) -> Double {
    return meters / 1609.344
}

func metersToFeet(_ meters: Double) -> Double {
    return meters * 3.28084
}

func metersToYards(_ meters: Double) -> Double {
    return meters * 1.09361
}

func convertSpeed(_ speedUnit: String, _ speed: Double) -> Double {
    if speedUnit == "Mph" {
        return metersPerSecondToMilesPerHour(speed)
    } else {
        return metersPerSecondToKilometersPerHour(speed)
    }
}

func convertSpeed(speedUnit: String, speed: Double) -> Double {
    if speedUnit == "Mph" {
        return metersPerSecondToMilesPerHour(speed)
    } else {
        return metersPerSecondToKilometersPerHour(speed)
    }
}

func convertTotalDistance(distanceUnit: String, totalDistance: Double) -> Double {
    if distanceUnit == "Miles" {
        return metersToMiles(totalDistance)
    } else {
        return metersToKilometers(totalDistance)
    }
}

func convertAltitude(altitudeUnit: String, altitude: Double) -> Double {
    if altitudeUnit == "Feet" {
        return metersToFeet(altitude)
    } else {
        return altitude
    }
}
