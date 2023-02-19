import mongoose, { Schema } from "mongoose";

export type RoleType = "User" | "Admin" | "LeadAdmin";

export interface IUser {
  _id?: mongoose.Types.ObjectId;
  firstname: string;
  surname: string;
  username: string;
  email: string;
  dob: Date;
  password: string;
  xp?: number;
  level?: number;
  isActivated?: boolean;
  activationCode?: number;
  isNotifications?: boolean;
  notificationId?: string;
  warnings?: number;
  role: RoleType;
  fans?: [{ user: mongoose.Types.ObjectId; status: number }];
  supporting?: [{ user: mongoose.Types.ObjectId; status: number }];
  forgotPasswordCode?: number | null;
}

const userSchema = new Schema<IUser>(
  {
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
    xp: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 1,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationCode: {
      type: Number,
      default: null,
    },
    isNotifications: {
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
      type: mongoose.Schema.Types.Mixed,
      default: "User",
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
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
