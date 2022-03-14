import mongoose from "mongoose";

const userVerificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserVerification = mongoose.model(
  "UserVerification",
  userVerificationSchema
);

export default UserVerification;
