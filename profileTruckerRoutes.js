const express = require("express");
const profileController = require("../controllers/profileTruckerController");
const router = express.Router();

router.post("/update-account", profileController.truckerProfileUpdate);

router.get("/show-V-data", profileController.getVechileData);
router.get("/show-L-data", profileController.getLoadData);
router.get("/show-C-data", profileController.getCommodityData);

//

router.get("/show-country-withSC", profileController.getcountry);
router.get("/show-country", profileController.getcountr);

router.get("/show-state", profileController.getstate);
router.get("/show-city", profileController.getcity);

router.post("/update-preference", profileController.truckerPreference);
router.get("/get-preference", profileController.getPreference);
router.get("/get-preferenc", profileController.getPreferenc);
router.delete("/preference-delete/:myidtd", profileController.getPDelte);

module.exports = router;
