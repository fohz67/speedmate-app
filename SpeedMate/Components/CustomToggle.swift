import SwiftUI

struct CustomToggle: View {
    var icon: String
    var label: String
    @Binding var isOn: Bool

    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
            Toggle(label, isOn: $isOn)
                .toggleStyle(SwitchToggleStyle(tint: .purple))
                .font(.custom("Universo-Regular", size: 14))
        }
    }
}

struct CustomToggle_Previews: PreviewProvider {
    @State static var toggleState = true
    
    static var previews: some View {
        CustomToggle(icon: "waveform.path.ecg", label: "Show Animation", isOn: $toggleState)
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
