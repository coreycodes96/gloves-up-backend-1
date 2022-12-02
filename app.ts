import express from "express";
import env from "dotenv";
env.config();
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://192.168.1.114:3000/",
    exposedHeaders: ["x-access", "x-refresh"],
  })
);

export default app;
