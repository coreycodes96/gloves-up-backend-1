import jwt from "jsonwebtoken";

export default (data: object) => {
  const secret: any = process.env.ACCESS_TOKEN_SECRET;

  return jwt.sign(data, secret, { expiresIn: "15mins" });
};
