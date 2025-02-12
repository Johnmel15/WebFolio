import { Request, Response } from "express";
import TechStack from "../models/TechStack";
import { ErrorHandler } from "../utils/errorHandler";

export const getAllTechStack = async (req: Request, res: Response): Promise<void> => {
  try {
    const search = (req.query.search as string) || "";
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;

    const query = search
      ? { name: { $regex: search, $options: "i" } } // Case-insensitive search
      : {};

    const total = await TechStack.countDocuments(query); // Total number of items

    const techStack = await TechStack.find(query)
      .skip((page - 1) * limit) // Skip items for pagination
      .limit(limit); // Limit results per page

    res.status(200).json({
      data: techStack,
      total,
      totalPages: Math.ceil(total / limit), // Total number of pages
      currentPage: page,
    });
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
