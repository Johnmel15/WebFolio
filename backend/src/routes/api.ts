import express from "express";
import { sendEmail } from "../controllers/emailController";
import { login, register } from "../controllers/authController";

const router = express.Router();

router.post("/send-email", sendEmail);
router.post("/auth/register", register);
router.post("/auth/login", login);

export default router;
