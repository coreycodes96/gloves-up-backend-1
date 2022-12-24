import User, { IUser } from "../../../../models/user.model";

export default async (email: string, code: number): Promise<string> => {
  try {
    const user: IUser = await User.findOne({ email }, "forgotPasswordCode");

    user.forgotPasswordCode = code;

    await User.findByIdAndUpdate(user._id, user, { new: true });

    return "forgot password code added";
  } catch (error: any) {
    console.log(error);
    throw new Error("sorry something went wrong");
  }
};
