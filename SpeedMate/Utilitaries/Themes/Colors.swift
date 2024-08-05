import SwiftUI

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        let a, r, g, b: UInt64

        var int: UInt64 = 0

        Scanner(string: hex).scanHexInt64(&int)
                
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8 * 17) & 0xFF, (int >> 4 * 17) & 0xFF, (int * 17) & 0xFF)
        case 6:
            (a, r, g, b) = (255, (int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = ((int >> 24) & 0xFF, (int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

func getColor(_ color: String) -> Color {
    switch color {
    case "Rouge":
        return Color(hex: "c21f3b")
    case "Rose":
        return Color(hex: "f03aba")
    case "Violet":
        return Color(hex: "8042d8")
    case "Bleu":
        return Color(hex: "172980")
    case "Cyan":
        return Color(hex: "188ba7")
    case "Turquoise":
        return Color(hex: "18ccaa")
    case "Vert":
        return Color(hex: "18c856")
    case "Fluo":
        return Color(hex: "92d800")
    case "Jaune":
        return Color(hex: "fefc45")
    case "Orange":
        return Color(hex: "ff8200")
    case "Gris":
        return Color(hex: "686868")
    case "Noir":
        return Color(hex: "101010")
    case "Blanc":
        return Color(hex: "d8d8d8")
    default:
        return Color(hex: "8042d8")
    }
}
