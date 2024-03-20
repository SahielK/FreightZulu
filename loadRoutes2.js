const express = require("express");
const loadController = require("../controllers/loadController");
const dataController = require("../controllers/dataController")

const router = express.Router();

router.route("/item-data").get(loadController.getItemData);
// router.route('/attendance-data').get(itemMasterController.getAttendanceData)

router
  .route("/")
  .get(loadController.getAllItems)
  .post(loadController.createItem);
router.route("/load-view").get(loadController.AllLoads);
router.route("/model-data/:id").get(loadController.OpenLoadsModel);
router.route("/winning/:id").post(loadController.AcceptBid);
router.route("/additional-data").get(loadController.getAdditionalData);
router.route("/winning/:id/:lid").post(loadController.AcceptDash);
router.route("/pdata").get(loadController.getPdata);
router.get("/dashamount", dataController.zeroTOFifteen);
router.get("/dashclickamount", dataController.getzeroToFifteenClick);

router.route("/pending-load-view").get(loadController.PendingLoads);
router.route("/ongoing-load-view").get(loadController.OngoingLoads);
router.route("/delivered-load-view").get(loadController.DeliveredLoads);
router.route("/dgetPendingBids").get(loadController.getPendingBids);
router.route("/getPrefilledData").get(loadController.getPrefilledData);
router
  .route("/:code")
  .get(loadController.getItemData)
  .patch(loadController.updateItem)
  .delete(loadController.deleteItem);

module.exports = router;
