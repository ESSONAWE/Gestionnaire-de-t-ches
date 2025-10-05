const mongoose = require("mongoose");

const TacheSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  categorie: { type: String, default: "Toutes" },
  statut: { type: String, enum: ["À faire", "En cours", "Terminé"], default: "À faire" },
  priorite: { type: String, enum: ["Basse", "Moyenne", "Haute"], default: "Moyenne" },
  employe: { type: String },
  dateCreation: { type: Date, default: Date.now },
  dateEcheance: { type: Date }
});

module.exports = mongoose.model("Tache", TacheSchema);
