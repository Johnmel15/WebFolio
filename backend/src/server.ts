import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "./routes/api";
import mongoose from "mongoose";
import connectDB from "./config/db";

const app = express();

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://web-folio-seven.vercel.app",
        "http://localhost:5175",
        "http://localhost:5174",
        "http://localhost:3001",
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

// API Routes
app.use("/api", apiRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    path: req.path,
    method: req.method,
  });
});

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      error: "Internal Server Error",
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Something went wrong",
    });
  }
);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Export for serverless
export default app;

// Start server if not in production
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
  });
}
