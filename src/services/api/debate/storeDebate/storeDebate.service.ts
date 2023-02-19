import Debate, { IDebate, DebateIOmit } from "../../../../models/debate.model";

export default async (data: DebateIOmit): Promise<IDebate> => {
  try {
    const debate = await Debate.create({ ...data });

    return debate;
  } catch (error: any) {
    throw new Error(error);
  }
};
