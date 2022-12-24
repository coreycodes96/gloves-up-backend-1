import { Request, Response } from "express";
import { forgotPasswordRequestValidation } from "../../../../validation/api/account/forgotPassword/forgotPasswordRequest.validation";
import isEmail from "../../../../utils/isEmail";
import randomCode from "../../../../utils/randomCode";
import forgotPasswordAddCode from "../../../../services/api/account/forgotPassword/forgotPasswordAddCode.service";
import forgotPasswordEmail from "../../../../utils/emails/forgotPasswordEmail";

export default async (req: Request, res: Response): Promise<Response> => {
  const { username, email } = req.body;

  try {
    //Validations
    const validation = forgotPasswordRequestValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Check if email exists
    if (!(await isEmail(email)))
      return res
        .status(422)
        .json({ email: `The email ${email} does not exist.` });

    const code = randomCode();

    await forgotPasswordAddCode(email, code);
    await forgotPasswordEmail(username, email, code);

    return res.json({ message: "A code has been sent to your email" });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
