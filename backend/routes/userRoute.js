const express = require("express");
const userCtrl = require("../controllers/userController")


const router = express.Router()

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/users", userCtrl.users);

module.exports = router