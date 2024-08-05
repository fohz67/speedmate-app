import SwiftUI

struct CustomText: View {
    var label: String
    
    var body: some View {
        Text(label)
            .font(
                .custom("Universo-Regular", size: 12))
            .foregroundColor(.secondary)
            .padding(.top, 5)
            .padding(.bottom, 2)
    }
}
