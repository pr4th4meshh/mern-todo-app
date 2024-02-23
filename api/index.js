import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import userRouter from './routes/user.route.js'

mongoose.connect(process.env.MONGO_URI_STORE).then(() => {
    console.log("Connected to mongodb!")
}).catch((err) => {
    console.log(err)
})

const app = express()

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})

app.use('/api/user', userRouter)