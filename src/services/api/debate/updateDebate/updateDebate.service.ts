import Debate from "../../../../models/debate.model";

export default async (id: string): Promise<string> => {
  try {
    const debate = await Debate.findOne({ _id: id }, "status");

    debate.status = "Accepted";

    await Debate.findByIdAndUpdate(debate._id, debate, { new: true });

    return "Debate updated";
  } catch (error) {
    throw new Error("something went wrong");
  }
};
