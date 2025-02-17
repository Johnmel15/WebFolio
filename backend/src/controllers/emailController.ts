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
    const isUnread = req.query.unread === "true";
    const isArchived = req.query.archived === "true";
    const search = req.query.search || ""; // Get search term from query

    const filter: any = {};
    if (req.query.unread !== undefined) filter.isRead = !isUnread;
    if (req.query.archived !== undefined) filter.archived = isArchived;
    if (search) {
      filter.$or = [
        { subject: { $regex: search, $options: "i" } }, // Match in subject
        { message: { $regex: search, $options: "i" } }, // Match in message
        { email: { $regex: search, $options: "i" } }, // Match in email
      ];
    }

    const emails = await Email.find(filter);

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

export const deleteEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const email = await Email.findById(id);
    if (!email) {
      res.status(404).json({ code: 404, message: "Email not found" });
      return;
    }
    await email.deleteOne();
    res.status(200).json({ code: 200, message: "Email deleted successfully" });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};

export const readEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { isRead } = req.body;
    await Email.findByIdAndUpdate(req.params.id, { isRead });
    res.status(200).json({ code: 200, message: "Email updated successfully" });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};

export const archiveEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { archived } = req.body;
    const updatedEmail = await Email.findByIdAndUpdate(
      req.params.id,
      { archived },
      { new: true }
    );

    if (!updatedEmail) {
      res.status(404).json({ code: 404, message: "Email not found" });
      return;
    }

    res.status(200).json({
      code: 200,
      message: "Email archived successfully",
      data: updatedEmail,
    });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};
