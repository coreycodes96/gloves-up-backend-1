import { DebateIOmit } from "../../src/models/debate.model";
import mongoose from "mongoose";

export const debate: DebateIOmit = {
  sender: new mongoose.Types.ObjectId("63f18ea457f53b2417ac0d4d"),
  receiver: new mongoose.Types.ObjectId("63f18eb016c4c63154d1b19e"),
  title: "this is a title",
  description: "this is a description",
  date: new Date("11/04/1996"),
};
