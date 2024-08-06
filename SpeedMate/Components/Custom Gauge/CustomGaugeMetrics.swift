import SwiftUI

private struct CustomGaugeMetricView: View {
    @EnvironmentObject var settings: SettingsModel

    var metric: Metric
    var geometry: GeometryProxy
    var alignmentHorizontal: Alignment
    var alignmentVertical: Alignment

    var body: some View {
        VStack(alignment: .center) {
            Image(systemName: metric.icon)
                .frame(width: 15, height: 17)
                .foregroundColor(getAppTint(settings: settings))
            
            Text(metric.getText(using: settings))
                .font(
                    .custom("Universo-Regular", size: 14)
                )
                .foregroundColor(.primary)
        }
        .frame(width: geometry.size.width * 0.5, alignment: alignmentHorizontal)
        .padding(alignmentVertical == .top ? .top : .bottom, -15)
        .padding(alignmentHorizontal == .leading ? .leading : .trailing, -25)
    }
}

struct CustomGaugeMetrics: View {
    @EnvironmentObject var settings: SettingsModel
    
    var size: Double
    var metrics: [Metric?]
    
    var body: some View {
        GeometryReader { geometry in
            VStack {
                HStack {
                    if let metric = metrics.indices.contains(0) ? metrics[0] : nil {
                        CustomGaugeMetricView(
                            metric: metric,
                            geometry: geometry,
                            alignmentHorizontal: .leading,
                            alignmentVertical: .top
                        )
                    }
                    
                    Spacer()
                    
                    if let metric = metrics.indices.contains(1) ? metrics[1] : nil {
                        CustomGaugeMetricView(
                            metric: metric,
                            geometry: geometry,
                            alignmentHorizontal: .trailing,
                            alignmentVertical: .top
                        )
                    }
                }
                
                Spacer()
                
                HStack {
                    if let metric = metrics.indices.contains(2) ? metrics[2] : nil {
                        CustomGaugeMetricView(
                            metric: metric,
                            geometry: geometry,
                            alignmentHorizontal: .leading,
                            alignmentVertical: .bottom
                        )
                    }
                    
                    Spacer()
                    
                    if let metric = metrics.indices.contains(3) ? metrics[3] : nil {
                        CustomGaugeMetricView(
                            metric: metric,
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
