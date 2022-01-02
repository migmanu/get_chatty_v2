// require mongoose
const mongoose = require("mongoose")
// require dotenv
require("dotenv").config()
// import enviromental variables
const url = process.env.URL


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
