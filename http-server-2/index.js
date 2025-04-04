const express = require("express")
const app = express()

const port = 2000

app.use(express.json()) // middleware to parse JSON body

app.get("/route-handler", function(req, res) {
    res.json({
        name: "Harshul",
        age: 20
    });
})

app.post("/conversations", function(req, res) {
    req.send({
        msg: "2 + 2 = 4"
    })
})

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})
