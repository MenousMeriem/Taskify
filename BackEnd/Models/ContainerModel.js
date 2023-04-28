
const mongoose = require('mongoose') 


const ContainerSchema = new mongoose.Schema(
  {
    Titre: {
      type: String,
      required: true,
    },
    CarteId : [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        default: [],
    }] ,
  },
)

module.exports = mongoose.model("Container", ContainerSchema)