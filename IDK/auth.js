const { ALL } = require("dns");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = '123456';

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username: "harshulmi13@gmail.com",
        password: "123",
        name: "harshul mehra"
    },
    {
        username: "shivyakushwah24@gmail.com",
        password: "12321",
        name: "shivya kushwah"
    },
    {
        username: "plkmehra97@gmail.com",
        password: "12323",
        name: "palak mehra"
    }
];

function userExists(username, password) {
    // write the logic
    let userExist = false;
    for (let i=0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExist = true;
        }
    }
    return userExist
}

app.post("/signin", function(req, res) {
    username = req.body.username;
    password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in the in memory DB"
        });
    };
    var token = jwt.sign({ username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USERS
    })
})

app.listen(3000);

