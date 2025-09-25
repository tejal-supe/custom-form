import User from "../models/user.model.js";
import { sendError, sendSuccess } from "../utils/response.util.js";

export const regsiterUserController = async (req, res) => {
  try {
    const { name, emailId, password } = req.body;
    if (!name || !emailId || !password) {
      sendError(res, "Enter all the details!", null, 400);
    }
    const exisitingUser = await User.findOne({ emailId });
    if (exisitingUser) {
      sendError(res, "User already exisits!", null, 400);
    }
    const newUser = await User.create({ name, emailId, password });
    if (!newUser) {
      sendError(res, "Error creating User!", null, 400);
    }
    sendSuccess(res, "User created Successfully!", newUser, 201);
  } catch (error) {
    sendError(res, "Internal Error!", error, 500);
  }
};
