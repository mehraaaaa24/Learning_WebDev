const express = require("express");
const z = require("zod");
const app = express();

// const schema = z.array(z.number());
/*
    {
        email: string => email
        password: atleast 8 char
        country: "IN" or "US" 
    }
*/ 

const schema = z.object({
    email: z.string(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})
app.use(express.json());  

app.post("/health-checkup", function(req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    res.send({
        response
    })
})
app.listen(3000);
