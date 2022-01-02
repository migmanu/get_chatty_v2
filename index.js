// require express
const express = require('express');
// create new express app
const app = express();
// require http
const http = require('http');
// create new server
const server = http.createServer(app);
// require socket.io
const { Server } = require("socket.io");
// create new event listener
const io = new Server(server);
// require mongoose
const mongoose = require("mongoose")
// require body-parser
const bodyParser = require("body-parser")
// require cors
const cors = require("cors")
// require dotenv
require("dotenv").config()
// import enviromental variables
const port = process.env.PORT || 3000
const url = process.env.URL

const Message = require('./models/message')

// connect to MongoDB 
mongoose.connect(url, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors())

const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))

// configure body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

io.on('connection', (socket) => {
  console.log('a user connected');
});


app.get('/chat', (req, res) => {
    console.log('index.html sent')
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) => {
        if(err)
            sendStatus(500);
        res.sendStatus(200);
    })
})


server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
