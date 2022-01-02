// require mongoose
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    message: String,
    date: Date,
    sender: String
})

// export function
module.exports = mongoose.model('Message', MessageSchema)
