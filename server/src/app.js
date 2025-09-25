import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import config from "./config/environment.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(
  cors({
    origin: config.base_url,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);

export default app;