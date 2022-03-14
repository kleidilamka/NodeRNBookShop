import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import Category from "../models/categoryModel.js";

// @description Fetch All Books
// @route Get /api/books
// @access Public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});

  res.json(books);
});

// @description Fetch Single Book
// @route Get /api/books/:id
// @access Public

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate("category");

  if (book) {
    return res.json(book);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @description Create a book
// @route Post /api/books/
// @access Private/Admin

const createBook = asyncHandler(async (req, res) => {
  // const category = await Category.findById(req.body.category);
  // if (!category) return res.status(400).send("Invalid Category");

  const book = new Book({
    user: req.body.user,
    author: req.body.author,
    image: req.body.image,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    price: req.body.price,
    countInStock: req.body.countInStock,
    quantity: req.body.quantity,
  });

  const createdBook = await book.save();
  res.status(201).json(createdBook);
});

const createNewBook = asyncHandler(async (req, res) => {
  const category = new Book({
    user: req.body.user,
    author: req.body.author,
    image: req.body.image,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    price: req.body.price,
    countInStock: req.body.countInStock,
    quantity: req.body.quantity,
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    const alreadyReviewed = book.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      comment,
      user: req.user._id,
    };

    book.reviews.push(review);

    await book.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getBooks,
  getBookById,
  createNewBook,
  deleteBook,
  createProductReview,
};
