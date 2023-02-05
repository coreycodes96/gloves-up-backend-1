import mongoose, { Schema, Document } from "mongoose";

export interface DebateI {
  sender: mongoose.Schema.Types.ObjectId;
  receiver: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  date: Date;
  time: Date;
  status: boolean;
  viewers: [
    {
      user: mongoose.Types.ObjectId;
    }
  ];
}

const debateSchema = new Schema<DebateI>(
  {
    sender: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    receiver: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    viewers: [
      {
        user: mongoose.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Debate", debateSchema);
