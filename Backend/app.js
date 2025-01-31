import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config({path: './.env'});
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
import voterRouter from "./router/voter.route.js";
app.use('/api/v3/voting',voterRouter);
export { app };
