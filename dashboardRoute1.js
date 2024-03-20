// hey there this is the route for  the Myloads

const express = require("express");
const dashboardloads = require("../controllers/dashboardController");
const router = express.Router();

router.get("/loads", dashboardloads.MyloadsForDashboard);
router.get("/tobid", dashboardloads.Mytobid);
router.get("/Myloads", dashboardloads.Myloads);
router.post("/:id/:CheckValue/:StsTime", dashboardloads.MydataForStatusTime);
router.get("/notify", dashboardloads.Notify);
module.exports = router;
