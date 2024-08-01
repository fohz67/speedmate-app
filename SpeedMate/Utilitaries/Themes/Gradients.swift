import SwiftUI

func getGradient(for color: String) -> LinearGradient {
    switch color {
    case "Rouge":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "ff415c"), Color(hex: "89001d")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Rose":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "ff6bf6"), Color(hex: "e200b5")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Violet":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "9a5dff"), Color(hex: "6a00e2")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Bleu":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "2f4dff"), Color(hex: "000db5")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Cyan":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "2fd1ff"), Color(hex: "006a88")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Turquoise":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "2fffe4"), Color(hex: "008876")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Vert":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "2fff6f"), Color(hex: "00883d")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Fluo":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "bfff59"), Color(hex: "a8ff00")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Jaune":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "fbff8b"), Color(hex: "fff600")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Orange":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "ffc600"), Color(hex: "ff6000")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Gris":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "929292"), Color(hex: "444444")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Noir":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "202020"), Color(hex: "000000")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Blanc":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "ffffff"), Color(hex: "b7b7b7")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Arc en ciel":
        return LinearGradient(
            gradient: Gradient(colors: [.red, .orange, .yellow, .green, .blue, .indigo, .purple]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Police":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "005aff"), Color(hex: "ff0036")]),
            startPoint: .bottom,
            endPoint: .leading
        )
    case "Fizz":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "3fd0ff"), Color(hex: "fc00ff")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    default:
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "9a5dff"), Color(hex: "6a00e2")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    }
}

func getGradientUnique(for color: String) -> LinearGradient {
    switch color {
    case "Rouge":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "c21f3b"), Color(hex: "c21f3b")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Rose":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "f03aba"), Color(hex: "f03aba")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Violet":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "8042d8"), Color(hex: "8042d8")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Bleu":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "172980"), Color(hex: "172980")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Cyan":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "188ba7"), Color(hex: "188ba7")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Turquoise":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "18ccaa"), Color(hex: "18ccaa")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Vert":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "18c856"), Color(hex: "18c856")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Fluo":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "92d800"), Color(hex: "92d800")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Jaune":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "fefc45"), Color(hex: "fefc45")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Orange":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "ff8200"), Color(hex: "ff8200")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Gris":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "686868"), Color(hex: "686868")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Noir":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "101010"), Color(hex: "101010")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    case "Blanc":
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "d8d8d8"), Color(hex: "d8d8d8")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    default:
        return LinearGradient(
            gradient: Gradient(colors: [Color(hex: "8042d8"), Color(hex: "8042d8")]),
            startPoint: .bottomTrailing,
            endPoint: .topLeading
        )
    }
}
