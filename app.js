import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

config({
  path: "./data/config.env",
});

//middle ware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//user routes
app.use("/api/v1/users", userRouter); //user routes
app.use("/api/v1/task", taskRouter); //user task

//home route
app.get("/", (req, res) => {
  res.send("Hey I'm working");
});

// error handling
app.use(errorMiddleware);
