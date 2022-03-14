import express from "express";
const router = express.Router();

import {
  createCartItem,
  deleteCartItem,
  getCartItemById,
  getCartItems,
  updateCartItem,
} from "../controllers/cartController.js";

router.route("/").get(getCartItems).post(createCartItem);

router
  .route("/:id")
  .get(getCartItemById)
  .patch(updateCartItem)
  .delete(deleteCartItem);

export default router;
