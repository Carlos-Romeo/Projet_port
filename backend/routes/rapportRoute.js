const express = require("express");
const rapportCtrl = require("../controllers/rapportController")


const router = express.Router()

router.post("/InsRapport", rapportCtrl.rapportInsert);
router.get("/SelRapport", rapportCtrl.rapportSelect);

module.exports = router