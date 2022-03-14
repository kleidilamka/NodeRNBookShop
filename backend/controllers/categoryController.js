import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

//@desc Fetch all categories
//@route GET api/categories
//@access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.json(categories);
});

//@desc Fetch single category
//@route GET api/categories/:id
//@access Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json(category);
  } else {
    throw new Error("Category not found");
  }
});

// @description Create a book
// @route Post /api/books/
// @access Private/Admin

const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

// @desc    Delete a product
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getCategories, getCategoryById, createCategory, deleteCategory };
