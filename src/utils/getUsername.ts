import User, { IUser } from "../models/user.model";

export default async (data: string): Promise<string> => {
  const user: IUser = await User.findOne({ email: data }, "username");

  return user.username;
};
