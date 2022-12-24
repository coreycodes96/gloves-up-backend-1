import User, { IUser } from "../../../../models/user.model";

export default async (email: string): Promise<string> => {
  try {
    const user: IUser = await User.findOne(
      { email },
      "_id activationCode isActivated"
    );

    user.activationCode = null;
    user.isActivated = true;

    await User.findByIdAndUpdate(user._id, user, { new: true });

    return "Account has been successfully activated";
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
