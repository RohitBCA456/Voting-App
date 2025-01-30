import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config({path: './.env'});
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
import voterRouter from "./router/voter.route.js";
app.use(express.json());
app.use(cookieParser());
app.use('/api/v3/voting',voterRouter);
export { app };
