const express = require('express') ; 
const mongoose = require("mongoose");
const cors = require('cors')
const ErrorHandler = require('express-async-handler')
require('dotenv').config()

const CarteRoute = require('./Routes/CarteRoute');
const ContainerRoute = require('./Routes/ContainerRoute')
const server= express()
server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(cors())

server.use("/Container", ContainerRoute)
server.use("/Carte", CarteRoute)

server.use("/*",(req,res) => {
    res.status(404).json(" Not Found !! ")
})

server.use(ErrorHandler)
mongoose 
    .connect(process.env.MONGO_URI)
    .then((res) => {
        server.listen(process.env.PORT, () => {
            console.log(" Server Running !! ")
        })
    })

    .catch((err) => console.log(err))



