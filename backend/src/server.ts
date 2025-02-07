import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import apiRoutes from "./routes/api";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

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
    console.log(`Server running on port ${PORT}`);
  });
}
