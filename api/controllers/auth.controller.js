import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body
  const newUser = new User({ username, email, password: hashedPassword })
  const hashedPassword = bcryptjs.hashSync(password, 10)
  try {
    await newUser.save()
    res.status(200).json("New user created successfully!")
  } catch (error) {
    next(error)
  }
}
