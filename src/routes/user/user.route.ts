import express from "express";
import { createAccount } from "../../controllers/api/account/createAccount.controller";

const route = express.Router();

route.post("/create", createAccount);

export default route;
