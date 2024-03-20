const dotenv = require("dotenv");
const app = require("./app");
// const notify = require("./controllers/dashboardController");
dotenv.config({ path: "./config.env" });
const db = require("./db");
const port = process.env.PORT || 8005;

// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ port: 8080 });

// const webSocketClients = [];



console.log(process.env.DB_CONNECTION_STRING);



///////////////////////

const { Client } = require("pg");
let client = new Client({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  connectionString: process.env.DB_CONNECTION_STRING,
});

client.connect();

// client.query("LISTEN new_data_channel");

// Handle PostgreSQL notifications


  // Iterate over WebSocket clients and send the notification payload

// wss.on("connection", (ws) => {
//   console.log(`WebSocket server running on port ${websocketPort}...`);
//   // console.log(ws);

//   ws.send("Hello this is welcome message");
//   //reply
//   ws.on("message", (message) => {
//     console.log(`message: ${message}`);

//     //message handling
//     if (message == "hi") {
//       ws.send("hello");
//     } else if (message == "bye") {
//       ws.send("goodbye");
//     } else {
//       ws.send("other message");
//     }
//   });
// });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
