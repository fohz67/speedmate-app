import SwiftUI

struct CustomButton: View {
    @EnvironmentObject var settings: SettingsModel

    var icon: String
    var label: String
    var action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                Image(systemName: icon)
                    .frame(width: 30, height: 40)
                    .foregroundColor(.secondary)

                Text(label)
                    .font(
                        .custom("Universo-Regular", size: 14)
                    )
                    .foregroundColor(.primary)
                
                Spacer()

                Image(systemName: "chevron.right")
                    .foregroundColor(Color(getColor(settings.appTint)))
            }
        }
    }
}
