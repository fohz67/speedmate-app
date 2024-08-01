import SwiftUI

struct CustomButton: View {
    var icon: String
    var label: String
    var action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                Image(systemName: icon)
                    .frame(width: 30, height: 40)
                    .foregroundColor(.white)
                Text(label)
                    .foregroundColor(.white)
                Spacer()
                Image(systemName: "chevron.right")
                    .foregroundColor(.purple)
            }
        }
    }
}

struct CustomButton_Previews: PreviewProvider {
    static var previews: some View {
        CustomButton(icon: "paintbrush", label: "Personnalisation", action: {})
    }
}
