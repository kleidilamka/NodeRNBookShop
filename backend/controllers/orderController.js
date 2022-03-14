import Order from "../models/orderModel.js";
import CartItem from "../models/cartModel.js";
import asyncHandler from "express-async-handler";

//@desc Fetch all orders
//@route GET api/orders
//@access Private
const getOrderItems = asyncHandler(async (req, res) => {
  const orders = await Order.find({});

  res.json(orders);
});

//@desc Fetch orders by id
//@route GET api/orders/:id
//@access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    throw new Error("Category not found");
  }
});

//@desc create order
//@route GET api/orders/
//@access Private

const createOrder = asyncHandler(async (req, res) => {
  const order = new Order({
    // user: req.body.user,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    state: req.body.state,
    city: req.body.city,
    totalPrice: req.body.totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});

export { getOrderItems, getOrderById, createOrder };
