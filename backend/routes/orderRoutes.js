import express from "express";
import {
  createOrder,
  getOrderById,
  getOrderItems,
} from "../controllers/orderController.js";
const router = express.Router();

router.route("/").get(getOrderItems).post(createOrder);

router.route("/:id").get(getOrderById);

export default router;
