import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    listId: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true },
    position: Number,
    labels: [String],
    dueDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Card", cardSchema);
