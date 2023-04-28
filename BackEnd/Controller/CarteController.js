const expressAsyncHandler = require('express-async-handler')
const carteModel = require('../Models/carteModel')

// Afficher Toutes les cartes : 
exports.afficherCarte = expressAsyncHandler(async(req,res)=> {
    try {
        const Carte = await carteModel.find()
        res.status(202).json(Carte)
    } catch (error) {
        res.status(400)
    }
})

// Ajouter une carte : 
exports.ajouterCarte = expressAsyncHandler(async(req,res) => {
    try {
        const {id} = req.params
        if(!id){
            res.status(400).json('Aucune carte n est disponible')
        }
        await carteModel.create ({
            Titre,
            Urgence,
        })
    } catch (error) {
        res.status(400)
    }
})

// Modifier une carte : 
exports.modifierCarte = expressAsyncHandler(async(req,res)=> {
    try {
        const {id} = req.params
        if(!id){
            res.status(400).json('Aucune carte n est disponible')
        }
        await carteModel.findByIdAndUpdate (id)
    } catch (error) {
        res.status(400)
    }
})

//Supprimer une Carte : 
exports.supprimerCarte = expressAsyncHandler(async (req,res) => {
    try {
        const {id} = req.params 
        await carteModel.findByIdAndDelete(id)
        res.status(202).json("Carte Supprimée")
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})