import SwiftUI

struct CustomGaugeMetrics: View {
    @EnvironmentObject var settings: SettingsModel
    
    var size: Double
    var metrics: [Metric]
    
    var body: some View {
        GeometryReader { geometry in
            VStack {
                HStack {
                    if metrics.indices.contains(0) {
                        MetricView(
                            metric: metrics[0],
                            geometry: geometry,
                            alignmentHorizontal: .leading,
                            alignmentVertical: .top
                        )
                    }
                    
                    Spacer()
                    
                    if metrics.indices.contains(1) {
                        MetricView(
                            metric: metrics[1],
                            geometry: geometry,
                            alignmentHorizontal: .trailing,
                            alignmentVertical: .top
                        )
                    }
                }
                
                Spacer()
                
                HStack {
                    if metrics.indices.contains(2) {
                        MetricView(
                            metric: metrics[2],
                            geometry: geometry,
                            alignmentHorizontal: .leading,
                            alignmentVertical: .bottom
                        )
                    }
                    
                    Spacer()
                    
                    if metrics.indices.contains(3) {
                        MetricView(
                            metric: metrics[3],
                            geometry: geometry,
                            alignmentHorizontal: .trailing,
                            alignmentVertical: .bottom)
                    }
                }
            }
        }
        .frame(width: size, height: size)
    }
}

struct MetricView: View {
    @EnvironmentObject var settings: SettingsModel

    var metric: Metric
    var geometry: GeometryProxy
    var alignmentHorizontal: Alignment
    var alignmentVertical: Alignment

    var body: some View {
        VStack(alignment: .center) {
            Image(systemName: metric.icon)
                .frame(width: 15, height: 15)
                .foregroundColor(.secondary)
            
            Text(metric.getText(using: settings))
                .font(
                    .custom("Universo-Regular", size: 14)
                )
                .foregroundColor(.secondary)
        }
        .frame(width: geometry.size.width * 0.5, alignment: alignmentHorizontal)
        .padding(alignmentVertical == .top ? .top : .bottom, -15)
        .padding(alignmentHorizontal == .leading ? .leading : .trailing, -25)
    }
}
