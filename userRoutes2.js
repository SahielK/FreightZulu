const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/checkStatus", authController.isLoggedIn);

router.patch(
  "/changePassword",
  authController.protect,
  authController.updateMyPassword
);

// validate mail
router.patch("/validate", authController.validateMail);
router.post("/email-validate/:email", authController.Mailvalidate);

// new
router.patch("/Trucker-validate", authController.validateMailTrucker);

// mail for shipper
router.post(
  "/forgotpasswords",

  authController.resetPassord
);

// mail for trucker
router.post(
  "/forgotpasswordt",

  authController.resetPassordt
);
// reset shipper
router.post(
  "/resetpsds/:id/:token",

  authController.ResetPsw
);
// reset trucker
router.post(
  "/resetpsdt/:id/:token",

  authController.ResetPsw
);

module.exports = router;
