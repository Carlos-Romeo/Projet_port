const express = require("express");
const horaireCtrl = require("../controllers/horairController")


const router = express.Router()

router.post("/InsHoraire", horaireCtrl.horaireInsert);
router.get("/SelHoraire", horaireCtrl.horaireSelect);

module.exports = router