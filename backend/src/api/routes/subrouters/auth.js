const express = require("express")
const {
    loginController, registerController
} = require("../../controllers/auth.controller.js")
const authRouter = express.Router()

authRouter.get("/login", loginController)
authRouter.get("/register", registerController)

module.exports = authRouter