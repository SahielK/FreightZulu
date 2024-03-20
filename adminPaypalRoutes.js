// backend/routes/api.js
const express = require("express");
const paypal = require("../controllers/adminPayment");


const router = express.Router();

router.route("/my-server/create-paypal-order").post(paypal.CreateOrder);

router.route("/my-server/capture-paypal-order").post(paypal.CapturePayment);



module.exports = router;
