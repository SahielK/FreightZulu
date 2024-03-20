// hey there this is the route for  the Myloads

const express = require("express");
const dashboardloads = require("../controllers/dashboardController");
const router = express.Router();


// 1st
router.get("/loads", dashboardloads.MyloadsForDashboard);
// 2nd
router.get("/tobid", dashboardloads.Mytobid);
// last
router.get("/Myloads", dashboardloads.Myloads);


router.get("/MyAll-Loads", dashboardloads.MyAllLoads);

router.get("/dashamountTrucker", dashboardloads.carddetail);



// for the mobile
router.get("/wins", dashboardloads.winsDashboardMobile)
router.get("/earning", dashboardloads.truckerEarningMobile)

router.post("/:id/:CheckValue/:StsTime", dashboardloads.MydataForStatusTime);
router.get("/notify", dashboardloads.Notify);
module.exports = router;
