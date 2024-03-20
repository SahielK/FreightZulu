const express = require("express");
const signUpController = require("../controllers/signUpTruckerController");
const router = express.Router();
router.route("/create-account").post(signUpController.createAccount);
router.route("/create-account-mobile").post(signUpController.createAccountByMobile);
module.exports = router;
