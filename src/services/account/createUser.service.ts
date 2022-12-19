import User, { IUser } from "../../models/user.model";
import bcrypt from "bcryptjs";

export default async (data: IUser, code: number): Promise<object> => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user: IUser = await User.create({
      ...data,
      password: hashedPassword,
      activationCode: code,
    });

    return user;
  } catch (error: any) {
    throw new Error("sorry there seems to be an issue with the server");
  }
};
