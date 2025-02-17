import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    archived: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("email", emailSchema);
