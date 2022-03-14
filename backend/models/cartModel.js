import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Book",
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;
