const express = require("express");
const router = express.Router();
const {
  getTaches,
  ajouterTache,
  modifierTache,
  supprimerTache,
} = require("../controllers/tacheController");

router.get("/", getTaches);
router.post("/", ajouterTache);
router.put("/:id", modifierTache);
router.delete("/:id", supprimerTache);

module.exports = router;
