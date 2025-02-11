import { Request, Response } from "express";
import TechStack from "../models/TechStack";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllTechStack = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const techStack = await TechStack.find();
    res.status(200).json(techStack);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getOneTechStack = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const techStack = await TechStack.findById(id);
    if (!techStack) {
      res.status(404).json({ code: 404, message: "Tech Stack not found" });
      return;
    }
    res.status(200).json(techStack);
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};

export const createTechStack = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const techStack = new TechStack(req.body);
    const newTechStack = await techStack.save();
    res.status(201).json({
      message: "Tech Stack Saved!",
      code: 200,
      data: newTechStack,
    });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};

export const updateTechStack = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const updatedTechStack = await TechStack.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTechStack) {
      res.status(404).json({ message: "Tech Stack not found" });
      return;
    }

    res.status(200).json({
      message: "Tech Stack Updated!",
      code: 200,
      data: updatedTechStack,
    });
  } catch (error) {
    const { status, body } = ErrorHandler.handleValidationError(error);
    res.status(status).json(body);
  }
};
