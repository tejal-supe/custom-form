import express from "express";

import {
  validateLoginUser,
  validateRegisterUser,
} from "../utils/validation.util.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";
import {
  getMe,
  loginUserController,
  regsiterUserController,
} from "../controllers/user.controller.js";
import { authenticateJWT } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateRegisterUser,
  handleValidationErrors,
  regsiterUserController
);

userRouter.post(
  "/login",
  validateLoginUser,
  handleValidationErrors,
  loginUserController
);
userRouter.post("/getMe",authenticateJWT, getMe);

export default userRouter;
