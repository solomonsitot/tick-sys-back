require("dotenv").config();
const DBconnection = require("./src/config/db_con");
const userRoute = require("./src/routes/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const express = require("express");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "https://tick-sys.vercel.app/",
    credentials: true,
  })
);


// app.use(
//   cors({
//     origin: (origin, callback) => {
//       const allowedOrigins = ["http://localhost:5173","https://tick-sys.vercel.app/"];
//       if (allowedOrigins.includes(origin) || !origin) {
//         callback(null, true); // Allow the origin
//       } else {
//         callback(new Error("Not allowed by CORS")); // Deny the origin
//       }
//     },
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});