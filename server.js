var express = require('express')


var app = express()

app.use(express.static(__dirname))


const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
