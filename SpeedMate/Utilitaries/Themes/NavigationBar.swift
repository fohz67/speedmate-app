import SwiftUI

func getNavigationStyle() {
    let appearance = UINavigationBarAppearance()
    
    appearance.largeTitleTextAttributes = [
        .font: UIFont(name: "Universo-Black", size: 35)!
    ]
    appearance.titleTextAttributes = [
        .font: UIFont(name: "Universo-Black", size: 20)!
    ]
    
    UINavigationBar.appearance().standardAppearance = appearance
    UINavigationBar.appearance().compactAppearance = appearance
    UINavigationBar.appearance().scrollEdgeAppearance = appearance
}
