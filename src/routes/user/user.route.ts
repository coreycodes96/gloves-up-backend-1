import express from "express";
import createAccount from "../../controllers/api/account/createAccount.controller";
import activateAccount from "../../controllers/api/account/activateAccount.controller";
import resendActivation from "../../controllers/api/account/resendActivation.controller";

const route = express.Router();

route.post("/create", createAccount);
route.put("/activation", activateAccount);
route.put("/activation/resend", resendActivation);

export default route;
