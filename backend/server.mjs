import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./dbconnects.js";

// import validateTokenRoutes from "./routes/validateTokenRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import wishlistRoutes from "./routes/wishlist.js";

const app = express();
const PORT = process.env.PORT || 5000;

/* ───────────── Resolve __dirname in ES modules ───────────── */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ───────────── Middlewares ───────────── */
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

/* ───────────── Static uploads (default.jpg वग़ैरह) ───────────── */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ───────────── Database ───────────── */
connectDB();

/* ───────────── APIs ───────────── */
app.use("/api/auth", authRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/wishlist", wishlistRoutes);
// app.use("/api", validateTokenRoutes);

/* ───────────── Start server ───────────── */
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
