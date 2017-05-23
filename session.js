var express = require('express')
var router = express.Router()

router.post('/sessions', function(req, res){
    return res.json({
        message: "Session saved successfully"
    })
})

router.get('/sessions', function(req, res){
    res.json([
        {
            id: 0,
            name: "Home",
            tabs: ["http://google.com", "http://facebook.com"]
        },
        {
            id: 1,
            name: "Office",
            tabs: ["http://stackoverflow.com", "http://linkedin.com"]
        }
    ])
})

router.get('/sessions/:id', function(req, res){
    var id = req.params.id
    res.json({
        id: id,
        name: "Home",
        tabs: ["http://google.com","http://facebook.com"]
    })
})

module.exports = router