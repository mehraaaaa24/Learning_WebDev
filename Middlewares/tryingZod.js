const express = require("express");
const app = express();
const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req, res) {
    const inputs = req.body;
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "your inputs are invalid"
        })
        return;
    }
})