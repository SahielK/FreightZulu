// backend/routes/api.js
const express = require('express');
const paypal = require('../controllers/paypalController');

const router = express.Router();

router.route('/my-server/create-paypal-order').post(paypal.CreateOrder)



router.route('/my-server/capture-paypal-order').post(paypal.CapturePayment)

// async (req, res)=>{
//     console.log("Capture ttttttttttttttttttttt")
//     const {orderID} = req.body;
//     try {
         
//         const captureData = await paypal.capturePayment(orderID);
//         res.json(captureData);
//             }
//             catch(err){
//                 res.status(500).send(err.message);
//             }
// });



module.exports = router;
