import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  activateAccount,
  forgotPassword,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

router.route("/").post(registerUser);
router.route("/email-activate").post(activateAccount);
router.route("/forgot-password").put(forgotPassword);

export default router;
