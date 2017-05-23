var app = require('express')()
var bodyParser = require('body-parser')

var sessionHandler = require('./session')

app.use(bodyParser.json())
app.use('/api', sessionHandler)

app.listen(3000, function(){
    console.log("Server is listening on port 3000")
})