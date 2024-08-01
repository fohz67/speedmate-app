import SwiftUI

struct CustomPickerBase<PickerStyleType: PickerStyle>: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    var style: PickerStyleType
    var frameWidth: CGFloat?
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
            Text(label)
                .font(.custom("Universo-Regular", size: 14))
            Spacer()
            Picker("", selection: $selection) {
                ForEach(options, id: \.self) { option in
                    Text(option).tag(option)
                }
            }
            .accentColor(.purple)
            .pickerStyle(style)
            .frame(width: frameWidth)
        }
    }
}

struct CustomMenuPickerColor: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    
    var body: some View {
        CustomPickerBase(icon: icon, label: label, selection: $selection, options: options, style: MenuPickerStyle(), frameWidth: 100)
    }
}

struct CustomSegmentedPicker: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    
    var body: some View {
        CustomPickerBase(icon: icon, label: label, selection: $selection, options: options, style: SegmentedPickerStyle(), frameWidth: 150)
    }
}

struct CustomPicker_Previews: PreviewProvider {
    @State static var selection = "Km/h"
    
    static var previews: some View {
        Group {
            CustomPickerBase(icon: "speedometer", label: "speedUnit", selection: $selection, options: ["Km/h", "Mph"], style: MenuPickerStyle(), frameWidth: 100)
                .previewLayout(.sizeThatFits)
                .padding()
            
            CustomPickerBase(icon: "speedometer", label: "speedUnit", selection: $selection, options: ["Km/h", "Mph"], style: SegmentedPickerStyle(), frameWidth: 150)
                .previewLayout(.sizeThatFits)
                .padding()
        }
    }
}
