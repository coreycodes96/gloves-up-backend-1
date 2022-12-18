import express from "express";
import createAccount from "../../controllers/api/account/createAccount.controller";
import activateAccount from "../../controllers/api/account/activateAccount.controller";

const route = express.Router();

route.post("/create", createAccount);
route.put("/activate", activateAccount);

export default route;
