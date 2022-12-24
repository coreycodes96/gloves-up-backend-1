import express from "express";
import createAccount from "../../controllers/api/account/createAccount/createAccount.controller";
import activateAccount from "../../controllers/api/account/activateAccount/activateAccount.controller";
import resendActivation from "../../controllers/api/account/activateAccount/resendActivation.controller";
import requestForgotPassword from "../../controllers/api/account/forgotPassword/requestForgotPassword.controller";

const route = express.Router();

route.post("/create", createAccount);
route.put("/activation", activateAccount);
route.put("/activation/resend", resendActivation);
route.post("/forgot/password/request", requestForgotPassword);

//Verify Password
//Reset Password

export default route;
