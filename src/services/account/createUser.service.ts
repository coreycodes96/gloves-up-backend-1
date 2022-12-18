import User, { IUser } from "../../models/user.model";

export default async (data: IUser, code: number): Promise<object> => {
  try {
    const user: IUser = await User.create({ ...data, activationCode: code });

    return user;
  } catch (error: any) {
    throw new Error("sorry there seems to be an issue with the server");
  }
};
