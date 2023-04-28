
const{
    afficherCarte,
    modifierCarte,
    supprimerCarte,
} = require("../Controller/CarteContainer")

const CarteRoute = require("express").Router()

CarteRoute
    .get("/AfficherCarte", afficherCarte)
    .post("/ModifierCarte", modifierCarte)
    .delete("/SupprimerCarte", supprimerCarte)

    module.exports = CarteRoute