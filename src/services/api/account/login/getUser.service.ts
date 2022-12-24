import User, { IUser } from "../../../../models/user.model";

export default async (username: string): Promise<IUser> => {
  try {
    const user: IUser = await User.findOne(
      { username },
      "firstname surname email username role warnings fans supporting isNotifications notificationId xp level dob"
    );

    return user;
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
