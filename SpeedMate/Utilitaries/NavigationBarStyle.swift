import SwiftUI

func configureNavigationBarAppearance() {
    let appearance = UINavigationBarAppearance()
    appearance.backgroundEffect = UIBlurEffect(style: .systemUltraThinMaterial)
    appearance.backgroundColor = .clear
    appearance.largeTitleTextAttributes = [.font: UIFont(name: "Universo-Black", size: 35)!]
    appearance.titleTextAttributes = [.font: UIFont(name: "Universo-Black", size: 20)!]

    UINavigationBar.appearance().standardAppearance = appearance
    UINavigationBar.appearance().compactAppearance = appearance
    UINavigationBar.appearance().scrollEdgeAppearance = appearance
}
