import { body } from "express-validator";

export const validateRegisterUser = [
  body("name")
    .trim()
    .notEmpty()
    .isLength({ min: 2, max: 40 })
    .isAlphanumeric()
    .withMessage("Name should be between 2 and 40 alpha numeric characters"),
  body("emailId")
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage("Enter A Valid Email"),
  body("password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(
      "Password should be between 8 and 12 characters and should contain alphanumeric characters,and a special character"
    ),
];

export const validateLoginUser = [
  body("emailId")
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage("Enter A Valid Email"),
  body("password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(
      "Password should be between 8 and 12 characters and should contain alphanumeric characters,and a special character"
    ),
];