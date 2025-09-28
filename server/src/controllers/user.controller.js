import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { sendError, sendSuccess } from "../utils/response.util.js";
import config from "../config/environment.js";


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
    sendSuccess(res, "User created Successfully!", null, 201);
  } catch (error) {
    sendError(res, "Internal Error!", error, 500);
  }
};

export const loginUserController = async (req,res) =>{
  try {
    const {emailId,password} = req.body;
    if(!emailId || !password){
       sendError(res, "Enter all the details!", null, 400);
    }
    const userData = await User.findOne({emailId});
    if(!userData){
       sendError(res, "Invalid User Details!", error, 400);
    }
    const compare = await bcrypt.compare(password,userData.password);
    if(!compare){
        sendError(res, "Invalid User Details!", error, 400);
    }
     const token = jwt.sign({ id: userData._id }, config.jwt_secret, {
       expiresIn: config.jwt_expiry,
     });

     const cookieOptions = {
       httpOnly: true,
       secure: true,
       maxAge: 24 * 60 * 60 * 1000,
     };
     res.cookie("token", token, cookieOptions);
      sendSuccess(
        res,
        "User Logged in Successfully!",
        {
          id: userData._id,
          name: userData.name,
        },
        201
      );
     
  } catch (error) {
    sendError(res,"Internal Error!",error,500)
  }
}