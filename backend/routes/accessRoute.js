const express = require("express");
const accessCtrl = require("../controllers/accessController")


const router = express.Router()

router.post("/InsAccess", accessCtrl.accessInsert);
router.get("/SelAccess", accessCtrl.accessSelect); 

module.exports = router