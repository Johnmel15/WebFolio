import express from "express";
import {
  sendEmail,
  getEmails
} from "../../controllers/emailController";

const router = express.Router();

router.post("/send-email", sendEmail);
router.get("/", getEmails);

export default router;
