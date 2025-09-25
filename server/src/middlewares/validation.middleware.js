import { validationResult } from "express-validator";

import { sendError } from "../utils/response.util.js";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.param,
      message: error.msg,
      value: error.value,
    }));

    sendError(res, "Validation failed!", errorMessages, 400);
  }else{
      next();
  }

};
