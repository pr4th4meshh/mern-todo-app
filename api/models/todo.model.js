import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To-Do", "Working", "Completed"],
    default: "To-Do",
  },
})

const Todo = mongoose.model("Todo", todoSchema)
export default Todo
