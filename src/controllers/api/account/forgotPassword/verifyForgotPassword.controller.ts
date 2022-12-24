import { Request, Response } from "express";
import { forgotPasswordVerifyValidation } from "../../../../validation/api/account/forgotPassword/forgotPasswordVerify.validation";
import getForgotPasswordCode from "../../../../utils/getForgotPasswordCode";
import forgotPasswordCodeClear from "../../../../services/api/account/forgotPassword/forgotPasswordCodeClear.service";

export default async (req: Request, res: Response): Promise<Response> => {
  const { email, code } = req.body;

  try {
    //Validations
    const validation = forgotPasswordVerifyValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Check if the forgot password code matches
    if ((await getForgotPasswordCode(email)) !== code)
      return res.status(422).json({ code: "sorry code does not match" });

    await forgotPasswordCodeClear(email);

    return res
      .status(202)
      .json({ message: "Forgot password code has been verified" });
  } catch (error: any) {
    throw new Error(error);
  }
};
