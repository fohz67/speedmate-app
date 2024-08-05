import SwiftUI

class ProfileModel: ObservableObject {
    // Toi
    @AppStorage("photo") var photo = ""
    @AppStorage("firstName") var firstName = ""
    @AppStorage("lastName") var lastName = ""
    @AppStorage("nickname") var nickname = ""
    @AppStorage("age") var age = 0

    // Véhicule
    @AppStorage("vehicleType") var vehicleType = "Choisir"
    @AppStorage("vehicleBrand") var vehicleBrand = ""
    @AppStorage("vehicleModel") var vehicleModel = ""
    
    // Statistiques
    @AppStorage("odometer") var odometer = 0
}
