var path = require('path')
var express = require('express')
var app = express()
app.use(express.static(path.join(__dirname, '../output')))
var port = 2000
app.listen(port, function () {
    console.log('http://127.0.0.1:' + port)
})
