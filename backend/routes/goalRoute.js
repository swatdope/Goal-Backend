import express from "express";
import {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getGoal).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

export default router;
