import mongoose, { Schema } from "mongoose";

interface IUser {
  firstname: string;
  surname: string;
  username: string;
  email: string;
  dob: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  xp: number;
  level: number;
  isNotification: boolean;
  notificationId: string;
  warnings: number;
  role: number;
  fans: [{ user: mongoose.Types.ObjectId; status: number }];
  supporting: [{ user: mongoose.Types.ObjectId; status: number }];
  forgotPasswordCode: string | null;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  isNotification: {
    type: Boolean,
    default: false,
  },
  notificationId: {
    type: String,
    default: "",
  },
  warnings: {
    type: Number,
    default: 0,
  },
  role: {
    type: Number,
    default: 0, //0 = User | 1 = Admin | 2 = LeadAdmin
  },
  fans: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
      status: {
        type: Number,
        default: 0,
      },
    },
  ],
  supporting: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
      status: {
        type: Number,
        default: 0,
      },
    },
  ],
  forgotPasswordCode: {
    type: String,
    default: null,
  },
});

export default mongoose.model<IUser>("User", userSchema);
