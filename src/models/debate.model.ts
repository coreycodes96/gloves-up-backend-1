import mongoose, { Schema } from "mongoose";

export interface IDebate {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  title: string;
  description: string;
  date: Date;
  status: boolean;
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
      type: Boolean,
      default: false,
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
