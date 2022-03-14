import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import Book from "./models/bookModel.js";
import Category from "./models/categoryModel.js";
import booksData from "./data/booksData.js";
import bookCategories from "./data/bookCategories.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany();
    // await Category.deleteMany();
    // await Book.deleteMany();
    await User.deleteMany();

    //Add User
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    //Add Categories
    const sampleCategories = bookCategories.map((categories) => {
      return { ...categories, user: adminUser };
    });

    await Category.insertMany(sampleCategories);

    //Add Books
    const sampleBooks = booksData.map((books) => {
      return { ...books, user: adminUser };
    });

    await Book.insertMany(sampleBooks);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Category.deleteMany();
    await Book.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
