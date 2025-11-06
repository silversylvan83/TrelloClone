import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    createdBy: String, // could be userId later
  },
  { timestamps: true }
);

export default mongoose.model("Board", boardSchema);
