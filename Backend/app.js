import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config({path: './.env'});
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
import voterRouter from "./router/voter.route.js";
app.use(express.json());
app.use(cookieParser());
app.use('/api/v3/voting',voterRouter);
export { app };
