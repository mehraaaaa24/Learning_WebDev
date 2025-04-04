const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtpassword = '123456';

const app = express();

app.use(express.json);

mongoose.connect("mongodb+srv://harshulwork24:%40Warrobots13@cluster0.q6cyufk.mongodb.net/user_app?retryWrites=true&w=majority");

const User = mongoose.model("user", {name: String, email: String, password: String});

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    
    const ExistingUser = await User.findOne({ email: username });
    if (ExistingUser) {
        return res.status(400).send("Username already in use");
    }

    const user = new User({
        name: name,
        email: username,
        password: password,
      });
    
    user.save();
    res.json("USer created successfully");

})


