import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.unsubscribe(express.json());

app.use("/api/books", bookRoutes);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5002;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode port ${PORT}`.yellow
  )
);
