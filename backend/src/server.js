const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require("./api/routes/routes.js")
const connectDB = require("./config/db.js")
const dotenv = require("dotenv")

dotenv.config()

connectDB()

app.use(express.json());

app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});