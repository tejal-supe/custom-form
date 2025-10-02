import jwt from "jsonwebtoken";

import config from "../config/environment.js";
import User from "../models/user.model.js";
import { sendError } from "../utils/response.util.js";

export const authenticateJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      sendError(res, "Access denied. No token provided!", null, 400);
    }

    const decoded = jwt.verify(token, config.jwt_secret);
    const userDecoded = await User.findById(decoded.id).select("-password");

    if (!userDecoded) {
      sendError(res, "Token not found. Invalid User!", null, 401);
    }

    req.user = userDecoded;
    next();
  } catch (error) {
    sendError(res, "Internal Error!", error, 500);
  }
};
