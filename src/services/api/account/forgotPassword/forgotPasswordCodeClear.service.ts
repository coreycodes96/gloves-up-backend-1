import User, { IUser } from "../../../../models/user.model";

export default async (email: string): Promise<string> => {
  try {
    const user: IUser = await User.findOne({ email }, "forgotPasswordCode");

    user.forgotPasswordCode = null;

    await User.findByIdAndUpdate(user._id, user, { new: true });

    return "forgot password code has been cleared";
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
