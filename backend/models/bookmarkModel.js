import mongoose from "mongoose";

const bookmarkItemSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Book",
  },
  exists: {
    type: Boolean,
    required: true,
  },
});

const BookmarkItem = mongoose.model("BookmarkItem", bookmarkItemSchema);

export default BookmarkItem;
