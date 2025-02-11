import express from "express";
import { sendEmail } from "../controllers/emailController";
import { login, register } from "../controllers/authController";
import { TechStackRoutes } from "./techStack";

const router = express.Router();

router.post("/send-email", sendEmail);
router.post("/auth/register", register);
router.post("/auth/login", login);

router.use("/tech-stack", TechStackRoutes);

export default router;
