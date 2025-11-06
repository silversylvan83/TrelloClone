import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import boardRoutes from "./routes/boardRoutes.js";
import listRoutes from "./routes/listRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/boards", boardRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/cards", cardRoutes);

// Health check route
app.get("/", (req, res) => res.json({ message: "Trello Clone API is running" }));

// Reusable DB connection (for serverless)
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectDBOnce() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = connectDB().then((conn) => conn);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
