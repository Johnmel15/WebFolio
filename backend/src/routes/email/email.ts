import express from "express";
import {
  sendEmail,
  getEmails,
  deleteEmail,
  readEmail
} from "../../controllers/emailController";

const router = express.Router();

router.post("/send-email", sendEmail);
router.get("/", getEmails);
router.delete("/:id", deleteEmail);
router.patch("/:id/read", readEmail);

export default router;
