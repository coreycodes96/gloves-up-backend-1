import Debate from "../../../../models/debate.model";

export default async (id: string): Promise<string> => {
  try {
    await Debate.findByIdAndDelete(id);

    return "Debate deleted";
  } catch (error) {
    throw new Error("something went wrong");
  }
};
