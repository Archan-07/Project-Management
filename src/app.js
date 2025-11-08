import express from "express";

import cors from "cors";
const app = express();

// Basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

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

app.use("/api/v1/healthcheck", healthcheckrouter);

app.get("/", (req, res) => {
  res.send("hello");
});

export default app;
