import SwiftUI

protocol Metric {
    var icon: String { get }
    func getText(using settings: SettingsModel) -> String
}
