const express = require("express");
const dashboardloads = require("../controllers/adminDashboard");
const router = express.Router();

router.get("/total", dashboardloads.DashboardData);
router.get("/allloads", dashboardloads.AllLoads);
router.get("/allshipper", dashboardloads.AllShipper);
router.get("/alltrucker", dashboardloads.AllTrucker);
router.get("/shipper-profile-data/:id", dashboardloads.getProfileData);
module.exports = router;
