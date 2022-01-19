const express = require("express") 
const {
    getAllArticles,
    getArticle,
    createArticle
} = require("../../controllers/articles.controller.js")

const articleRouter = express.Router()


articleRouter.get("/getAllArticles", getAllArticles)
articleRouter.get("/getArticle", getArticle)
//protected
articleRouter.post("/createArticle", createArticle)

module.exports = articleRouter