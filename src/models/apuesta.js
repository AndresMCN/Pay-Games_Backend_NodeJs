const mongoose = require("mongoose");

const apuestaSchema = mongoose.Schema(
  {
    usuario:{type: String, required: true, trim: true},
    marcador: { type: String, required:true},
    partidoApostado: { type: String,required: true },
  },
  { versionKey: false, timestamps: true }
);


module.exports=mongoose.model('apuesta',apuestaSchema);
