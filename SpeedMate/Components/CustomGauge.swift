import SwiftUI

import SwiftUI

import SwiftUI

struct CustomGaugeStyle: GaugeStyle {
    var frameSize: Double
    
    private var purpleGradient = LinearGradient(gradient: Gradient(colors: [ Color(red: 207/255, green: 150/255, blue: 207/255), Color(red: 107/255, green: 116/255, blue: 179/255) ]), startPoint: .trailing, endPoint: .leading)
    
    public init(frameSize: Double) {
        self.frameSize = frameSize
    }
    
    func makeBody(configuration: Configuration) -> some View {
        let strokeWidth = frameSize / 15
        let innerStrokeWidth = frameSize / 30
        let dashSize = frameSize / 10
        let fontSize = frameSize / 3
        let unitFontSize = frameSize / 15
        
        return ZStack {
            
            Circle()
                .foregroundColor(Color(.systemGray6))
            
            Circle()
                .trim(from: 0, to: 0.75 * configuration.value)
                .stroke(purpleGradient, lineWidth: strokeWidth)
                .rotationEffect(.degrees(135))
            
            Circle()
                .trim(from: 0, to: 0.75)
                .stroke(Color.black, style: StrokeStyle(lineWidth: innerStrokeWidth, lineCap: .butt, lineJoin: .round, dash: [1, dashSize], dashPhase: 0.0))
                .rotationEffect(.degrees(135))
            
            VStack {
                configuration.currentValueLabel
                    .font(.custom("Universo-Black", size: fontSize))
                Text("KM/H")
                    .font(.custom("Universo-Regular", size: unitFontSize))
                    .foregroundColor(.gray)
            }
            
        }
        .frame(width: frameSize, height: frameSize)
    }
}

struct CustomGauge: View {
    var currentValue: Double
    var frameSize: Double
    
    var body: some View {
        Gauge(value: currentValue, in: 0...200) {
            Image(systemName: "gauge.medium")
                .font(.system(size: 50.0))
        } currentValueLabel: {
            Text("\(currentValue.formatted(.number))")
        }
        .gaugeStyle(CustomGaugeStyle(frameSize: frameSize))
    }
}

struct CustomGauge_Previews: PreviewProvider {
    static var previews: some View {
        CustomGauge(currentValue: 67.0, frameSize: 300)
    }
}
