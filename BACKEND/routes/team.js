import express from "express";
import Member from "../models/member.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const team = await Member.find({});
  res.json(team);
});
export default router;
