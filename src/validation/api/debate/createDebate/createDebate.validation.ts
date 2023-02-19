import { z } from "zod";

export const createDebateValidation = (
  data: object
): { status: boolean; data: object | null } => {
  const Debate = z.object({
    sender: z
      .string({
        required_error: "Sender required",
      })
      .trim(),
    receiver: z
      .string({
        required_error: "Receiver required",
      })
      .trim(),
    title: z
      .string({
        required_error: "Title required",
      })
      .trim()
      .min(1, "Please enter a title")
      .max(40, "Title can't be more than 40 characters"),
    description: z
      .string({
        required_error: "Description required",
      })
      .trim()
      .min(1, "Please enter a description")
      .max(150, "Description can't be more than 150 characters"),
    date: z.date({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    }),
  });

  try {
    Debate.parse(data);

    return { status: false, data: null };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return { status: true, data: e.flatten().fieldErrors };
    }

    throw new Error(e);
  }
};
