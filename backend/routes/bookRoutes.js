import express from "express";
const router = express.Router();

import {
  getBooks,
  getBookById,
  createNewBook,
  createProductReview,
} from "../controllers/bookController.js";

router.route("/").get(getBooks).post(createNewBook);

router.route("/:id").get(getBookById);

router.route("/:id/reviews").post(createProductReview);

export default router;
