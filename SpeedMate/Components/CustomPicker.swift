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
                .foregroundColor(.secondary)
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
        CustomPickerBase(icon: icon, label: label, selection: $selection, options: options, style: MenuPickerStyle(), frameWidth: 150)
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
