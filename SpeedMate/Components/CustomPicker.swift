import SwiftUI

struct CustomPickerBase<PickerStyleType: PickerStyle>: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    var style: PickerStyleType
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .frame(width: 30, height: 45)
            Text(label)
            Spacer()
            Picker("", selection: $selection) {
                ForEach(options, id: \.self) { option in
                    Text(option).tag(option)
                }
            }
            .pickerStyle(style)
            .frame(width: 150)
        }
    }
}

struct CustomMenuPickerColor: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    
    var body: some View {
        CustomPickerBase(icon: icon, label: label, selection: $selection, options: options, style: MenuPickerStyle())
    }
}

import SwiftUI

struct CustomSegmentedPicker: View {
    var icon: String
    var label: String
    @Binding var selection: String
    var options: [String]
    
    var body: some View {
        CustomPickerBase(icon: icon, label: label, selection: $selection, options: options, style: SegmentedPickerStyle())
    }
}

struct CustomPicker_Previews: PreviewProvider {
    @State static var selection = "Km/h"
    
    static var previews: some View {
        Group {
            CustomPickerBase(icon: "speedometer", label: "speedUnit", selection: $selection, options: ["Km/h", "Mph"], style: DefaultPickerStyle())
                .previewLayout(.sizeThatFits)
                .padding()
            
            CustomPickerBase(icon: "speedometer", label: "speedUnit", selection: $selection, options: ["Km/h", "Mph"], style: MenuPickerStyle())
                .previewLayout(.sizeThatFits)
                .padding()
            
            CustomPickerBase(icon: "speedometer", label: "speedUnit", selection: $selection, options: ["Km/h", "Mph"], style: SegmentedPickerStyle())
                .previewLayout(.sizeThatFits)
                .padding()
        }
    }
}
