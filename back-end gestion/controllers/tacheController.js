const Tache = require("../models/Tache");

// ✅ Lire toutes les tâches
const getTaches = async (req, res) => {
  const taches = await Tache.find();
  res.json(taches);
};

// ✅ Ajouter une tâche
const ajouterTache = async (req, res) => {
  const nouvelleTache = new Tache(req.body);
  await nouvelleTache.save();
  res.json(nouvelleTache);
};

// ✅ Modifier une tâche
const modifierTache = async (req, res) => {
  const { id } = req.params;
  const tacheModifiee = await Tache.findByIdAndUpdate(id, req.body, { new: true });
  res.json(tacheModifiee);
};

// ✅ Supprimer une tâche
const supprimerTache = async (req, res) => {
  const { id } = req.params;
  await Tache.findByIdAndDelete(id);
  res.json({ message: "Tâche supprimée" });
};

module.exports = { getTaches, ajouterTache, modifierTache, supprimerTache };
