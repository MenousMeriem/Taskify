const expressAsyncHandler = require('express-async-handler')
const containerModel = require('../Models/containerModel')

// Afficher Toutes les cartes : 
exports.afficherCarte = expressAsyncHandler(async(req,res)=> {
    try {
        const Carte = await containerModel.find()
        res.status(202).json(Carte)
    } catch (error) {
        res.status(400)
    }
})