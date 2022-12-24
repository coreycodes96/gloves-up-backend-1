import User, { IUser } from "../../../../models/user.model";

export default async (email: string, code: number): Promise<string> => {
  try {
    const user: IUser = await User.findOne({ email }, "activationCode");

    user.activationCode = code;

    await User.findByIdAndUpdate(user._id, user, { new: true });

    return "New activation code saved";
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
