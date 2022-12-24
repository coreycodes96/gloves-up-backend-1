import User, { IUser } from "../models/user.model";
import bcrypt from "bcryptjs";

export default async (username: string, password: string): Promise<boolean> => {
  try {
    const user: IUser = await User.findOne({ username }, "password");
    const doesPasswordExist = await bcrypt.compare(password, user.password);

    return doesPasswordExist;
  } catch (error: any) {
    throw new Error(error);
  }
};
