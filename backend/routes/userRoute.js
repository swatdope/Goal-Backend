import express from "express";
import { register, login, getMe } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", protect, getMe);

export default router;
