const express = require("express");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const app = express();
const wrapper = require("./utils/wrapper");
const { Client } = require("pg");
const bodyParser = require("body-parser");

const expressWs = require("express-ws")(app);

const userRouter = require("./routes/userRoutes");
const cnsRouter = require("./routes/cnsRoutes");
const authController = require("./controllers/authController");
const loadRouter = require("./routes/loadRoutes");
const apiRouter = require("./routes/api");
const signUpRouter = require("./routes/signUpRoutes");
const profileRouter = require("./routes/profileRoutes");
const paymentRouter = require("./routes/payment");
//////////////////trucker/////////////////

const loadTruckerRouter = require("./routes/loadTruckerRoutes");
const prolfileTruckerRoute = require("./routes/profileTruckerRoutes");
const truckDRoute = require("./routes/tdRoute");
const signUpTruckerRouter = require("./routes/signUpTruckerRoutes");
const dashboard = require("./routes/dashboardRoute");
const wsRouter = require("./routes/wsRoutes");
const payment = require("./routes/paymentRoutes");
const paypal = require("./routes/paypal");
const AdminRouter = require("./routes/adminDashboradRoutes");
const adminPayment = require("./routes/adminPaypalRoutes");
const adminAmount = require("./routes/adminAmountRoutes");
//faerhgljkgfdgfds demo for Pramod ji
// 1) MIDDLEWARES

// Implement CORS
// Access Control Allow Origin
// Allowing requests from only front end of this project..! --- MUST BE ADDED IMMEDIATELY AFTER DEPLPOYMENT!🛠
app.use(
  cors({
   origin: ["http://localhost:3005", "http://localhost:19006"],
    credentials: true,
  })
);
//Responding to OPTIONS req or pre-flight phase
app.options("*", cors());

app.use("/api", apiRouter);

app.ws("/ws", (ws, req) => {
  // WebSocket logic here
  wsController.handleWebSocketConnection(ws);
});

// ... Other routes and middleware ...

const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", (req, res, next) => {
  if (req.url !== "/v1/dashboard/loads") {
    limiter(req, res, next);
  } else {
    next();
  }
});

app.use(express.static("my-app/build"));

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.json());
app.use(cookieParser());

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 3) Add app.use to Routes using Routers
app.use("/api/v1/type", userRouter);
app.use("/api/v1/signup", signUpRouter);
app.use("/api/v1/profile", authController.protect, profileRouter);

app.use(
  "/api/v1/load",
  authController.protect,
  authController.checkUser("shipper"),
  loadRouter
);
app.use("/api/v1/paypal", paypal);
app.use("/api/v1/payment", authController.protect, paymentRouter);
////////////////////trucker

app.use("/api/v1/sigup", signUpTruckerRouter);
app.use(
  "/api/v1/profile",
  authController.protect,
  authController.checkUser("trucker"),
  prolfileTruckerRoute
);
app.use(
  "/api/v1/truckD",
  authController.protect,
  authController.checkUser("trucker"),
  truckDRoute
);
app.use(
  "/api/v1/dashboard",
  authController.protect,
  authController.checkUser("trucker"),
  dashboard
);
app.use("/api/v1/payment", authController.protect, payment);
app.use(
  "/api/v1/loadt",
  authController.protect,
  authController.checkUser("trucker"),
  loadTruckerRouter
);
// Admin
app.use("/api/v1/admin", authController.protect, AdminRouter);
app.use("/api/v1/admin-payment", authController.protect, adminPayment);
app.use("/api/v1/admin-amount", authController.protect, adminAmount);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
});

module.exports = app;
