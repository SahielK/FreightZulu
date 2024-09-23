const express = require("express");
const paymentController = require("../controllers/Spayment");
const router = express.Router();

// router.get('/get-preference', profileController.getPreference); 23-9

router.get("/getPaymentDetails", paymentController.GetPayInfo);
router.get("/getPaypal", paymentController.PaypalAmount);

module.exports = router;
