import { Request, Response } from "express";
import storeDebate from "../../../services/api/debate/storeDebate/storeDebate.service";
import { createDebateValidation } from "../../../validation/api/debate/createDebate/createDebate.validation";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    //Validation
    const validation = createDebateValidation(req.body);
    if (validation.status === true)
      return res.status(422).json(validation.data);

    //Store the invite
    storeDebate(req.body);

    //Send a notification to the correct user
    return res.status(201).json({ message: "Invite has been sent" });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
