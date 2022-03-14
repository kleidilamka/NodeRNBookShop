import asyncHandler from "express-async-handler";
import BookmarkItem from "../models/bookmarkModel.js";
import Book from "../models/bookModel.js";

// @description Fetch All Books
// @route Get /cart/books
// @access Public
const getBookmarkItems = asyncHandler(async (req, res) => {
  const bookmarkItems = await BookmarkItem.find({}).populate("book");

  res.json(bookmarkItems);
});

// @description Fetch Single Book
// @route Get /api/cart/:id
// @access Public
const getBookmarkById = asyncHandler(async (req, res) => {
  const bookmarkItem = await BookmarkItem.findById(req.params.id).populate(
    "book"
  );

  if (bookmarkItem) {
    return res.json(bookmarkItem);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @description Create a bookmark item
// @route Post /api/bookmarks/
// @access Private/Admin
const createBookmarkItem = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.body.book);
  if (!book) return res.status(400).send("Invalid Product");

  const bookmarkItem = new BookmarkItem({
    book: book._id,
    exists: true,
  });
  const createdBookmarkItem = await bookmarkItem.save();
  res.status(201).json(createdBookmarkItem);
});

// @desc    Delete bookmark item
// @route   DELETE /api/bookmarks/:id
// @access  Private/Admin
const deleteBookmarkItem = asyncHandler(async (req, res) => {
  const bookmarkItem = await BookmarkItem.findById(req.params.id);

  if (bookmarkItem) {
    await bookmarkItem.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getBookmarkItems,
  getBookmarkById,
  createBookmarkItem,
  deleteBookmarkItem,
};
