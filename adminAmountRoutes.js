const express = require("express");
const amount = require("../controllers/adminAmount");
const router = express.Router();

// router.get('/get-preference', profileController.getPreference);
router.get("/getPaymentDetails", amount.GetPayInfo);
router.get("/getPaypal", amount.PaypalAmount);

module.exports = router;
