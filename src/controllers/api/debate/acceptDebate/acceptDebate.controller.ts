import { Request, Response } from "express";
import updateDebate from "../../../../services/api/debate/updateDebate/updateDebate.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    //Accept debate
    await updateDebate(req.params.id);

    //Send notification to user
    return res.json({ message: "Debate has been accepted" });
  } catch (error) {
    throw new Error("something went wrong");
  }
};
