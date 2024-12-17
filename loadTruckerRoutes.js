const express = require("express");
const loadController = require("../controllers/loadTruckerController");

const router = express.Router();

router.route("/item-data").get(loadController.getItemData);
// router.route('/attendance-data').get(itemMasterController.getAttendanceData)

router
  .route("/")
  .get(loadController.getAllItems)
  .post(loadController.createItem);
router.route("/load-view").get(loadController.AllLoads);
router.route("/additional-data").get(loadController.getAdditionalData);
router.route("/load-data").get(loadController.AllViewBids);
router.route("/create-bid").post(loadController.createBid);
// added router.route("/update-lowest-bid-status").post(loadController.selectBid);

router
  .route("/:id")

  .get(loadController.getload)
  .delete(loadController.deleteItem);

module.exports = router;
