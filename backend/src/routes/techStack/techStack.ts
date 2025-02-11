import express from "express";
import {
  getAllTechStack,
  createTechStack,
  updateTechStack,
  getOneTechStack,
} from "../../controllers/techStackController";

const router = express.Router();

router.get("/", getAllTechStack);
router.get("/:id", getOneTechStack);
router.post("/", createTechStack);
router.put("/", updateTechStack);

export default router;
