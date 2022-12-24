import { Request, Response } from "express";
import { forgotPasswordResetValidation } from "../../../../validation/api/account/forgotPassword/forgotPasswordReset.validation";
import isEmail from "../../../../utils/isEmail";
import changeUsersPassword from "../../../../services/api/account/forgotPassword/changeUsersPassword.service";

export default async (req: Request, res: Response): Promise<Response> => {
  const { email, newPassword } = req.body;

  try {
    //Validations
    const validation = forgotPasswordResetValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Checking if email is correct
    if (!(await isEmail(email)))
      return res
        .status(422)
        .json({ email: `The email ${email} does not exist` });

    await changeUsersPassword(email, newPassword);

    return res
      .status(202)
      .json({ message: "Password has now been successfully changed" });
  } catch (error: any) {
    throw new Error(error);
  }
};
