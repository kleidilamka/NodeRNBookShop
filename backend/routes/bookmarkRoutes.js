import express from "express";
const router = express.Router();

import {
  createBookmarkItem,
  deleteBookmarkItem,
  getBookmarkById,
  getBookmarkItems,
} from "../controllers/bookmarkController.js";

router.route("/").get(getBookmarkItems).post(createBookmarkItem);

router.route("/:id").get(getBookmarkById).delete(deleteBookmarkItem);

export default router;
