import SwiftUI

struct CustomInfo: View {
    var label: String
    var value: String
    var unit: String
    
    var body: some View {
        VStack(alignment: .center) {
            Text(label)
                .font(.custom("Universo-Light", size: 17))
                .foregroundColor(.secondary)
            HStack {
                Text(value)
                    .font(.custom(unit.isEmpty ? "Universo-Bold" : "Universo-Black", size: unit.isEmpty ? 24 : 30))
                Text(unit)
                    .font(.custom("Universo-Regular", size: 20))
                    .foregroundColor(.purple)
            }
        }
    }
}
