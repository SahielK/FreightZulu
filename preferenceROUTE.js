
const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

router.get('/preference-trucker' , profileController.getAdditionalData);
module.exports = router;
