const express = require("express");
const dashboardloads = require("../controllers/adminDashboard");
const router = express.Router();

router.get("/total", dashboardloads.DashboardData);
router.get("/allloads", dashboardloads.AllLoads);
router.get("/allshipper", dashboardloads.AllShipper);
router.get("/alltrucker", dashboardloads.AllTrucker);
router.get("/shipper-profile-data/:id", dashboardloads.getProfileData);

router.get("/trucker-new-week", dashboardloads.newTruckersweek);
router.get("/detail-of-trucker", dashboardloads.DetailofTruckers);
router.get("/top-five", dashboardloads.topTruckers);
router.get("/transactions", dashboardloads.Transaction);
router.get("/lane", dashboardloads.Lane);
router.get("/transactiotable", dashboardloads.Transactionstable);
router.get("/subscribe", dashboardloads.Subscribed);
module.exports = router;
//3-8-2024
