import SwiftUI

struct CustomGaugeMetrics: View {
    @EnvironmentObject var settings: SettingsModel

    var size: CGFloat
    var gpsAccuracy: Double
    var temperature: Double
    
    private var getGpsAccuracyText: String {
        if settings.distanceUnit == "Km" {
            return String(format: "%.2f", gpsAccuracy) + "M"
        } else {
            return String(format: "%.2f", metersToYards(gpsAccuracy)) + "Yd"
        }
    }
    
    private var getTemperatureText: String {
        return String(format: "%.2f", temperature) + settings.temperatureUnit == "Celsius" ? "°C" : "°F"
    }
    
    var body: some View {
        GeometryReader { geometry in
            VStack {
                HStack {
                    Text(getGpsAccuracyText)
                        .frame(width: geometry.size.width * 0.5, alignment: .leading)
                        .padding(.bottom, 5)
                        .padding(.trailing, 5)
                        .font(
                            .custom("Universo-Regular", size: 18)
                        )
                        .foregroundColor(.secondary)
                    
                    Spacer()
                    
                    Text(getTemperatureText)
                        .frame(width: geometry.size.width * 0.5, alignment: .trailing)
                        .padding(.bottom, 5)
                        .padding(.leading, 5)
                        .font(
                            .custom("Universo-Regular", size: 18)
                        )
                        .foregroundColor(.secondary)
                }
                
                Spacer()
                
                HStack {
                    Text("Test3")
                        .frame(width: geometry.size.width * 0.5, alignment: .leading)
                        .padding(.top, 5)
                        .padding(.trailing, 5)
                        .font(
                            .custom("Universo-Regular", size: 18)
                        )
                        .foregroundColor(.secondary)
                    
                    Spacer()
                    
                    Text("Test4")
                        .frame(width: geometry.size.width * 0.5, alignment: .trailing)
                        .padding(.top, 5)
                        .padding(.leading, 5)
                        .font(
                            .custom("Universo-Regular", size: 20)
                        )
                        .foregroundColor(.secondary)
                }
            }
        }
        .frame(width: size, height: size)
    }
}
