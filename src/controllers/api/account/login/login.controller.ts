import { Request, Response } from "express";
import { loginValidation } from "../../../../validation/api/account/login/login.validation";
import isUsername from "../../../../utils/isUsername";
import isPassword from "../../../../utils/isPassword";
import getUser from "../../../../services/api/account/login/getUser.service";
import createRefreshToken from "../../../../utils/jwt/createRefreshToken";
import createAccessToken from "../../../../utils/jwt/createAccessToken";

export default async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  try {
    //Validations
    const validation = loginValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Check if the username matches
    if (!(await isUsername(username)))
      return res
        .status(422)
        .json({ username: "Sorry the username does not match" });

    //Check if the password matches
    if (!(await isPassword(username, password)))
      return res
        .status(403)
        .json({ password: "Sorry your password does not match" });

    const user = await getUser(username);

    const tokenData = { ...user };

    const refreshToken = createRefreshToken(tokenData);
    const accessToken = createAccessToken(tokenData);

    return res.status(200).json({ ...tokenData, refreshToken, accessToken });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
