import { Request, Response } from "express";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(201).json({ message: "Invite has been sent" });
  } catch (error: any) {
    throw new Error("sorry something went wrong");
  }
};
