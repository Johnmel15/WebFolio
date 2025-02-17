import express from "express";
import {
  sendEmail,
  getEmails,
  deleteEmail,
  readEmail,
  archiveEmail
} from "../../controllers/emailController";

const router = express.Router();

router.post("/send-email", sendEmail);
router.get("/", getEmails);
router.delete("/:id", deleteEmail);
router.patch("/:id/read", readEmail);
router.patch("/:id/archive", archiveEmail);

export default router;
