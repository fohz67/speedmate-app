import SwiftUI

func getColorScheme(_ appAppearance: String) -> ColorScheme? {
    switch appAppearance {
    case "Clair":
        return .light
    case "Sombre":
        return .dark
    default:
        return nil
    }
}
