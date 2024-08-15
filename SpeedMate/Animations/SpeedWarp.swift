import SwiftUI

struct SpeedLinesView: View {
    @Binding var speed: Double
    
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                ForEach(0..<100, id: \.self) { index in
                    SpeedLine(speed: speed)
                        .position(x: geometry.size.width / 2, y: geometry.size.height * 0.1)
                        .rotationEffect(.degrees(Double(index) * 3.6))
                        .offset(y: -geometry.size.height / 2)
                }
            }
        }
        .blendMode(.screen)
    }
}

struct SpeedLine: View {
    var speed: Double
    
    var body: some View {
        Rectangle()
            .fill(LinearGradient(
                gradient: Gradient(colors: [Color.white.opacity(0.8), Color.clear]),
                startPoint: .top,
                endPoint: .bottom
            ))
            .frame(width: 2, height: 200)
            .scaleEffect(y: CGFloat(speed / 100), anchor: .top)
            .animation(.linear(duration: 0.1), value: speed)
    }
}
