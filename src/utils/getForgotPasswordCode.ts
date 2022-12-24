import User, { IUser } from "../models/user.model";

export default async (email: string): Promise<number> => {
  try {
    const user: IUser = await User.findOne(
      { email },
      "-_id forgotPasswordCode"
    );

    return user.forgotPasswordCode;
  } catch (error: any) {
    throw new Error(error);
  }
};
