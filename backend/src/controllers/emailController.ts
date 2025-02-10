import nodemailer from "nodemailer";
import { Request, Response } from "express";
import emailConfig from "../config/email";

const transporter = nodemailer.createTransport(emailConfig.smtp);

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, body } = req.body;

    const mailOptions = {
      from: email,
      to: emailConfig.defaultTo,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${body}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ code: 500, message: "Failed to send email, please try again." });
  }
};
