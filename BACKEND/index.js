import express from "express";
const app = express();
import team from "./data/team.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import teamRoutes from "./routes/team.js";
dotenv.config();

connectDb();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api/team", teamRoutes);

app.get("/", (req, res) => {
  res.send("Running...");
});

const PORT = 3001;

app.listen(PORT, (err) => {
  console.log(`The server is running on port ${PORT}`);
});
