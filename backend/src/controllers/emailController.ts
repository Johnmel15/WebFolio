import nodemailer from "nodemailer";
import { Request, Response } from "express";
import emailConfig from "../config/email";
import Email from "../models/Email";
import { ErrorHandler } from "../utils/errorHandler";

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

    const emailObj = new Email({
      name,
      email,
      subject,
      message: body,
    });

    const newEmailObj = await emailObj.save();

    res.status(200).json({
      code: 200,
      message: "Email sent successfully",
      data: newEmailObj,
    });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};

export const getEmails = async (req: Request, res: Response): Promise<void> => {
  try {
    const emails = await Email.find();
    res.status(200).json({
      code: 200,
      message: "Emails fetched successfully",
      data: emails,
    });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};
