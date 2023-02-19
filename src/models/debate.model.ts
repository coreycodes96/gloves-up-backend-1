import mongoose, { Schema } from "mongoose";

export type StatusType = "Default" | "Accepted" | "Declined";

export interface IDebate {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  title: string;
  description: string;
  date: Date;
  status: StatusType;
  viewers: [
    {
      user: mongoose.Types.ObjectId;
    }
  ];
}

export type DebateIOmit = Omit<IDebate, "viewers" | "status">;

const debateSchema = new Schema<IDebate>(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: mongoose.Schema.Types.Mixed,
      default: "Default",
    },
    viewers: [
      {
        user: mongoose.Types.ObjectId,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Debate", debateSchema);
