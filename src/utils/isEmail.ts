import User from "../models/user.model";

export default async (email: string): Promise<boolean> => {
  try {
    const checkEmail = await User.countDocuments({ email });

    return checkEmail === 1 ? true : false;
  } catch (error: any) {
    throw new Error("sorry there seems to be an error");
  }
};
