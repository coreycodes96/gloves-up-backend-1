import User, { IUser } from "../../../../models/user.model";
import bcrypt from "bcryptjs";

export default async (email: string, newPassword: string): Promise<string> => {
  try {
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);
    const user: IUser = await User.findOne({ email }, "password");

    user.password = hashedNewPassword;

    await User.findByIdAndUpdate(user._id, user, { new: true });

    return "password has now been changed";
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
