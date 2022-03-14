import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import CartItem from "../models/cartModel.js";
// @description Fetch All Books
// @route Get /cart/books
// @access Public
const getCartItems = asyncHandler(async (req, res) => {
  const cartItems = await CartItem.find({}).populate("product");

  res.json(cartItems);
});

// @description Fetch Single Book
// @route Get /api/cart/:id
// @access Public

const getCartItemById = asyncHandler(async (req, res) => {
  const cartItem = await CartItem.findById(req.params.id);

  if (cartItem) {
    return res.json(cartItem);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @description Create a cartItem
// @route Post /api/cart/
// @access Private/Admin

const createCartItem = asyncHandler(async (req, res) => {
  const product = await Book.findById(req.body.product);
  if (!product) return res.status(400).send("Invalid Product");

  const cartItem = new CartItem({
    quantity: product.quantity,
    product: product._id,
  });

  const createdCartItem = await cartItem.save();
  res.status(201).json(createdCartItem);
});

// @description Update a cartItem
// @route Patch /api/cart/
// @access Public

const updateCartItem = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await CartItem.findByIdAndUpdate(id, updates, options);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// @description Delete a cartItem
// @route Patch /api/cart/:id
// @access Private
const deleteCartItem = asyncHandler(async (req, res) => {
  const cartItem = await CartItem.findById(req.params.id);

  if (cartItem) {
    await cartItem.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  deleteCartItem,
};
