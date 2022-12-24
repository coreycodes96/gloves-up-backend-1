import { Request, Response } from "express";
import { activateAccountValidation } from "../../../../validation/api/account/activateAccount/activateAccount.validation";
import isEmail from "../../../../utils/isEmail";
import getActivationCode from "../../../../utils/getActivationCode";
import activateUserAccount from "../../../../services/api/account/activateUserAccount.service";

export default async (req: Request, res: Response) => {
  const { email, code } = req.body;

  try {
    //Validations
    const validation = activateAccountValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Checking if the email exists
    if (!(await isEmail(email)))
      return res
        .status(422)
        .json({ email: `The email ${email} does not exist` });

    //Checking if the code is valid
    const activationCode = await getActivationCode(email, code);

    if (activationCode !== code)
      return res.status(422).json({ code: "Code is incorrect" });

    await activateUserAccount(email);

    return res
      .status(202)
      .json({ message: "Your account has been successfully activated" });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
