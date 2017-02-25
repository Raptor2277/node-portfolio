var express = require("express")

var router = express.Router()


router.get("/", function(req, res){
    res.end("Welcome to the api home page")
})

router.get("/users", function(req, res){
    res.json([
        { user: "SUPER USER", name: "JOHN CENA", pre: "and his name is..."},
        { user: "normal user", name: "joe", pre: "Hi, my name is "}
    ])
})

module.exports = router;