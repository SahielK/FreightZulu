const express = require("express");
const profileController = require("../controllers/profileController");
const router = express.Router();

router.post("/update-account", profileController.updateAccount);
router.get("/get-profile-data", profileController.getProfileData);
router.get("/check-profile", profileController.getCheckProfile);

router.get("/get-Data-lov", profileController.getDataLov);
module.exports = router;
