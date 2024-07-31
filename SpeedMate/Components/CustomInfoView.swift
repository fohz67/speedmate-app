import SwiftUI

struct CustomInfoView: View {
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
                    .font(.custom("Universo-Black", size: unit.isEmpty ? 24 : 30))
                    .fontWeight(.bold)
                Text(unit)
                    .font(.custom("Universo-Regular", size: 20))
                    .foregroundColor(.purple)
            }
        }
    }
}
