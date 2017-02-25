var express = require("express")

var app = express()

var apiRouter = require("./routes/api.js")

app.set("json spaces", 3)

app.use("/api", apiRouter)

app.get("/", function(req,res){
    res.end("Hello World")
})

app.listen(8080)