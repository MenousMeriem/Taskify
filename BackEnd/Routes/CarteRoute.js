
const{
    afficherCarte,
    ajouterCarte,
    modifierCarte,
    supprimerCarte,
} = require("../Controller/CarteController")

const CarteRoute = require("express").Router()

CarteRoute
    .get("/AfficherCarte", afficherCarte)
    .post("/AjouterCarte", ajouterCarte)
    .post("/ModifierCarte", modifierCarte)
    .delete("/SupprimerCarte", supprimerCarte)

    module.exports = CarteRoute