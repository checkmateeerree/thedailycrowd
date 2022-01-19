const express = require("express")
const authRouter = require("./subrouters/auth.js")
const articleRouter = require("./subrouters/articles.js")
const userRouter = require("./subrouters/user.js")

mainRouter = express.Router()

mainRouter.get("/", (req, res) => {
    return res.json({message: "Welcome to the API"})
})

mainRouter.use("/auth", authRouter)
mainRouter.use("/blogs", articleRouter)
mainRouter.use("/user", userRouter)

module.exports = mainRouter