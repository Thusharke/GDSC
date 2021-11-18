import mongoose from "mongoose";
import dotenv from "dotenv";
import Member from "./models/member.js";
import Event from "./models/events.js";
import team from "./data/team.js";
import events from "./data/events.js";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Member.deleteMany();
    await Member.insertMany(team);
    await Event.deleteMany();
    await Event.insertMany(events);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Member.deleteMany();
    await Event.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
