const mongoose = require('mongoose') 

const CarteSchema = new mongoose.Schema(
  {
    Contenu: {
      type: String,
      required: true,
    },

    Urgence: {
      type: String, 
      required: true,
    }
  },
)

module.exports = mongoose.model("Carte", CarteSchema)