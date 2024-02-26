import express from "express"
import { createTodo } from "../controllers/todo.contoller.js"

const router = express.Router()

router.post("/create", createTodo)

export default router
