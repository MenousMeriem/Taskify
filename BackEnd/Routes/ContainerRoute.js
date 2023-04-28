
const{
    afficherContainer,
    supprimerContainer,
} = require("../Controller/ContainerController")

const ContainerRoute = require("express").Router()

ContainerRoute
    .get("/AfficherContainer", afficherContainer)
    .delete("/SupprimerContainer", supprimerContainer)

    module.exports = ContainerRoute