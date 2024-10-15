import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const Todo =
  mongoose.models.tasks || mongoose.model("tasks", todoSchema);
