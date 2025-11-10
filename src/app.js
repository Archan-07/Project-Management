import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// Basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

// CORS configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

//import routes

import healthcheckrouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

const apiVersion = "/api/v1";

app.use(`${apiVersion}/healthcheck`, healthcheckrouter);
app.use(`${apiVersion}/auth`, authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

export default app;
