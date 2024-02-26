import Todo from "../models/todo.model.js"

export const createTodo = async (req, res, next) => {
    const {title, description, status} = req.body
    try {
        const todo = new Todo({title, description, status})
        return res.status(200).json(todo)
    } catch (error) {
        next(error)
    }
}