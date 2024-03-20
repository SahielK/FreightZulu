const express = require("express");
const truckDController = require("../controllers/truckDcontroller");
const router = express.Router();

router.post("/insert-truck", truckDController.truckDinsertdetails);
router.patch("/modify-truck", truckDController.modifyTruck);
router.delete("/delete-truck/:vin", truckDController.deleteTruck);
router.get("/mytruck", truckDController.TruckDetails);

module.exports = router;
