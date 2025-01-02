
const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();


// df router.get('/get-preference', profileController.getPreference);

router.get('/getPaymentDetails', paymentController.GetPayInfo)




module.exports = router;
