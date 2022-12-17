import { transport } from "./config.js";

const activateAccountEmail = async (
  username: string,
  email: string,
  code: number
): Promise<void> => {
  const mailOptions = {
    from: "gloves-up-test@outlook.com",
    to: email,
    subject: "Activate Email",
    html: `
            <div style="margin-left: auto; margin-right: auto; padding: 15px; width: 80%; background-color: #561493; font-family: Helvetica, Arial, sans-serif; color: #FFF; border-radius: 10px;">
                <h1>Hi ${username},</h1>
                <h3>Here is your activation code ${code}</h3>
            </div>
        `,
  };

  try {
    const info = await transport.sendMail(mailOptions);
  } catch (error) {
    console.log("Error!", error);
  }
};

export default activateAccountEmail;
