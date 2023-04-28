const express = require('express') ; 
const mongoose = require("mongoose");
const cors = require('cors')
const ErrorHandler = require('express-async-handler')

const CarteRoute = require('./Routes/CarteRoute');
const ContainerRoute = require('./Routes/ContainerRoute')

index.use(express.json())
index.use(cors())

index.use("/Container", ContainerRoute)
index.use("/Carte", CarteRoute)
index.use(ErrorHandler)

index.use("/*",(req,res) => {
    res.status(404).json(" Not Found !! ")
})

mongoose 
    .connect(process.env.MONGO_URI)
    .then((res) => {
        index.listen(process.env.PORT, () => {
            console.log(" Server Running !! ")
        })
    })

    .catch((err) => console.log(err))



