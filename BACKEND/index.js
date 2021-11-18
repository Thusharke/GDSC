import express from "express";
const app = express();
import team from "./data/team.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

var url = process.env.DATABASEURL || "mongodb://localhost/GDSC";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Running.");
});

app.get("/api/team", (req, res) => {
  res.json(team);
});

app.listen(process.env.PORT, (err) => {
  console.log(`The server is running on port ${PORT}`);
});
