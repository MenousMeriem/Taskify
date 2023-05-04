
const{
    afficherContainer,
    supprimerContainer,
    ajouterContainer,
    modifierContainer,
} = require("../Controller/ContainerController")

const ContainerRoute = require("express").Router()

ContainerRoute
    .get("/AfficherContainer", afficherContainer)
    .delete("/SupprimerContainer/:id", supprimerContainer)
    .post('/Ajouter', ajouterContainer)
    .put('/Modifier/:id', modifierContainer)

    module.exports = ContainerRoute