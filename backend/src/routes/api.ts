import express from "express";
import { sendEmail } from "../controllers/emailController";
import { login, register } from "../controllers/authController";
import { TechStackRoutes } from "./techStack";
import { EmailRoutes } from "./email";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);

router.use('/email', EmailRoutes);
router.use("/tech-stack", TechStackRoutes);

export default router;
