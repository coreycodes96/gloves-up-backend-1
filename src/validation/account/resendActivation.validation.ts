import { z } from "zod";

export const resendActivationValidation = (
  data: object
): { status: boolean; data: object | null } => {
  const User = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .trim()
      .min(1, "Please enter a email")
      .max(255, "Your email can't be more than 255 characters"),
  });

  try {
    User.parse(data);

    return { status: false, data: null };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return { status: true, data: e.flatten().fieldErrors };
    }

    throw new Error(e);
  }
};
