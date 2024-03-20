// backend/routes/api.js
const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/prefilled-data", dataController.getPrefilledData);

router.get("/pendingBids", dataController.getPendingBids);
// 
module.exports = router;
