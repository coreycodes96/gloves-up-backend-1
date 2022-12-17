import { IUser } from "../../src/models/user.model";

export const user1: IUser = {
  firstname: "John",
  surname: "Doe",
  username: "Johnny",
  email: "johnny@test.com",
  dob: new Date("11/04/1996"),
  password: "hello1234",
  activationCode: 123456,
};
