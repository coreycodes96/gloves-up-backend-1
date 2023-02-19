import { Request, Response } from "express";
import deleteDebate from "../../../../services/api/debate/deleteDebate/deleteDebate.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    //Deleting debate
    await deleteDebate(req.params.id);

    //Send notification to the user
    return res.json({ message: "Debate has been rejected" });
  } catch (error) {
    throw new Error("something went wrong");
  }
};
