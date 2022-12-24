import { Request, Response } from "express";
import { resendActivationValidation } from "../../../../validation/api/account/activateAccount/resendActivation.validation";
import isEmail from "../../../../utils/isEmail";
import randomCode from "../../../../utils/randomCode";
import activateAccountEmail from "../../../../utils/emails/activateAccountEmail";
import getUsername from "../../../../utils/getUsername";
import resendActivationCode from "../../../../services/api/account/resendActivationCode.service";

export default async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.body;

  try {
    //Validations
    const validation = resendActivationValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Checking if the email works
    if (!(await isEmail(email)))
      return res
        .status(422)
        .json({ email: `The email ${email} does not exist` });

    const newCode = randomCode();
    const username = await getUsername(email);

    await resendActivationCode(email, newCode);
    await activateAccountEmail(username, email, newCode);

    return res
      .status(202)
      .json({ message: "A new activation code has been sent to you." });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
