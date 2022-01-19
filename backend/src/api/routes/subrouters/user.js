const express = require("express") 
const {
    getAllUsers,
    getUser
} = require("../../controllers/user.controller.js")
const userRouter = express.Router()

//admin-protected
userRouter.get("/getAllUsers", getAllUsers)
userRouter.get("/getUser", getUser)

module.exports = userRouter