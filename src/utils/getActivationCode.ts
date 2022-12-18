import User from "../models/user.model";

export default async (email: string, code: number): Promise<number> => {
  try {
    const checkCode = await User.findOne({ email }, "activationCode");

    return checkCode.activationCode;
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
