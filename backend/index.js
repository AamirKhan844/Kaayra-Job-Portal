import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
const app = express(); //instance of the express and stored  in variable app as per the industry standard

//apis

//middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  }),
);
//  health check route to verify if the srever is running properly or not
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Backend is working fine",
    success: true,
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectDB();
  console.log(`server is running on port ${port}`);
});
