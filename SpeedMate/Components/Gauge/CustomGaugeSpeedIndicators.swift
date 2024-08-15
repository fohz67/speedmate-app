import SwiftUI

struct CustomGaugeSpeedIndicators: View {
    var size: Double
    
    var body: some View {
        let innerStrokeWidth: Double = size / 30
        let dashSize: Double = size / 10
        
        Circle()
            .trim(from: 0, to: 0.75)
            .stroke(
                Color.black,
                style: StrokeStyle(
                    lineWidth: innerStrokeWidth,
                    lineCap: .butt,
                    lineJoin: .round,
                    dash: [1, dashSize],
                    dashPhase: 0.0
                )
            )
            .rotationEffect(
                .degrees(135)
            )
        
    }
}
