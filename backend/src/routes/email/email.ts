import express from "express";
import {
  sendEmail,
  getEmails,
  deleteEmail
} from "../../controllers/emailController";

const router = express.Router();

router.post("/send-email", sendEmail);
router.get("/", getEmails);
router.delete("/:id", deleteEmail);

export default router;
