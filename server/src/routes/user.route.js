import express from "express";

import { validateRegisterUser } from "../utils/validation.util.js";
import { handleValidationErrors } from "../middlewares/validation.middleware.js";
import { regsiterUserController } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateRegisterUser,
  handleValidationErrors,
  regsiterUserController
);

export default userRouter;
