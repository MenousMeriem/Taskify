const expressAsyncHandler = require('express-async-handler')
const containerModel = require('../Models/ContainerModel')
const carteModel = require('../Models/CarteModel')
const ContainerModel = require('../Models/ContainerModel')

// Afficher Toutes les cartes : 
exports.afficherContainer = expressAsyncHandler(async(req,res)=> {
    try {
        const Carte = await containerModel.find()
        res.status(202).json(Carte)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//Ajouter container
exports.ajouterContainer = expressAsyncHandler(async (req,res) => {
    try {
        const {titre} = req.body
        if(!titre) {
            res.status(400)
            throw new Error("Empty fields!")
        }
        await ContainerModel.create({Titre: titre})
        res.status(201).json('Container ajouter avec succés')
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
//Modifier container
exports.modifierContainer = expressAsyncHandler(async (req,res) => {
    try {
        const {titre} = req.body
        const {id} = req.params
        if(!titre) {throw new Error("Empty fields!")}
        await ContainerModel.findByIdAndUpdate(id,{Titre: titre})
        res.status(201).json('Container ajouter avec succés')
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// Supprimer container : 
exports.supprimerContainer = expressAsyncHandler(async(req,res) =>{
    try {
        const {id} = req.params
        const container = await containerModel.findById(id)
        container.CarteId.length && container.CarteId.forEach(async (element) => {
            await carteModel.findByIdAndDelete(element)
        })
        await containerModel.findByIdAndDelete(id)
        res.status(202).json("Supprimé")
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})