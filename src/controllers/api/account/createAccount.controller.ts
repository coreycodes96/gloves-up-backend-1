import { Request, Response } from "express";
import { createAccountValidation } from "../../../validation/account/createAccount.validation";
import isUsername from "../../../utils/isUsername";
import isEmail from "../../../utils/isEmail";
import createUser from "../../../services/account/createUser.service";
import randomCode from "../../../utils/randomCode";
import activateAccountEmail from "../../../utils/emails/activateAccountEmail";

export const createAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { firstname, surname, username, email, dob, password } = req.body;

  try {
    //Validations
    const validation = createAccountValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Check if username already exists
    if (await isUsername(username))
      return res
        .status(422)
        .json({ username: `The username ${username} has already been taken` });

    //Check if email already exists
    if (await isEmail(email))
      return res
        .status(422)
        .json({ email: `The email ${email} has already been taken` });

    const code = randomCode();

    await createUser(
      {
        firstname,
        surname,
        username,
        email,
        dob,
        password,
      },
      code
    );

    await activateAccountEmail(username, email, code);

    return res
      .status(201)
      .json({ message: "account has been successfully created" });
  } catch (error) {
    console.log(error);
  }
};
