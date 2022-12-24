import jwt from "jsonwebtoken";

export default (data: object) => {
  const secret: any = process.env.REFRESH_TOKEN_SECRET;

  return jwt.sign(data, secret, { expiresIn: "1yr" });
};
