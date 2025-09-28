import express from "express";

import { validateLoginUser, validateRegisterUser } from "../utils/validation.util.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";
import { loginUserController, regsiterUserController } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateRegisterUser,
  handleValidationErrors,
  regsiterUserController
);

userRouter.post("/login",validateLoginUser,handleValidationErrors,loginUserController)

export default userRouter;
