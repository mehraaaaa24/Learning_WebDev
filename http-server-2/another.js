const express = require("express")
const app = express()

function calculateSum(n) {
    const ans = 0
    for (let i=0; i<n; i++) {
        ans += i;
    }
    return ans
}


app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans.toString());
})

app.listen(3001);
