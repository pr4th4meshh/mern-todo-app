import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO_URI_STORE).then(() => {
    console.log("Connected to mongodb!")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use((err, req,res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message
    })
  })

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})

app.use('/api/user', userRouter)
app.use('/api/user', authRouter)