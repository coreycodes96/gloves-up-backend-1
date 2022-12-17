import User from "../models/user.model";

export default async (username: string): Promise<boolean> => {
  try {
    const checkUser = await User.countDocuments({ username });

    return checkUser === 1 ? true : false;
  } catch (error: any) {
    throw new Error("sorry there seems to be an error");
  }
};
