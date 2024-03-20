const express = require("express");
const signUpController = require("../controllers/signUpTruckerController");
const router = express.Router();
router.route("/create-account").post(signUpController.createAccount);
module.exports = router;
