import express from "express";
const router = express.Router();
import {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

router.route("/").get(getCategories).post(createCategory);

router.route("/:id").get(getCategoryById).delete(deleteCategory);

export default router;
