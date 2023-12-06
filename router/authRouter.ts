import { Router } from "express";
import { createUser, getUser } from "../Controller/authController";

const authRouter = Router();

authRouter.route("/create-user").post(createUser);
authRouter.route("/get-user").get(getUser);

export default authRouter;
