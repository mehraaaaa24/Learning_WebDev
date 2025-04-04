const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = Number(req.query.kidneyId);

    if (!(username === "harshul" && password === "pass")) {
        res.status(400).json({
            msg: "Something up with your username or password"
        });
        return;
    }

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(400).json({
            msg: "Invalid kidney ID. Only 1 or 2 are allowed."
        });
        return;
    }

    res.json({
        msg: "Your kidney is fine"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// now what if i want to add a new route for a kidney replacement, (POST or PUT REQUEST), will we write all the input validations for the query parameters again ?? noo