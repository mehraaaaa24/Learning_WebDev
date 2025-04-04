const {Admin} = require("../db/database")

function adminMiddleware(req, res, next) {
    // implement admin auth logic
    // need to check the headers and validate the admin from the admin DB
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password
    })
        .then(function(value) {
            if(value) {
                next()
            } else {
                res.status(403).json({
                    msg: "User doesnt exist"
                })
            }
        })
}
module.exports = adminMiddleware;
