const { Router } = require("express");
const userMiddleware = require("../middleware/user-middleware");
const {User, Course} = require("../db/database")
const router = Router();

router.post('/signup', (req, res) => {
    // implement user signup logic
    const username = req.body.username
    const password = req.body.password

    User.create({
        username,
        password
}) 
    res.json({
        msg: "User created successfully"
    })
})

router.get('/courses', async (req, res) => {
    // implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
})

router.post('/courses/:courseId', userMiddleware,(req, res) => {
    // implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    },{
        purchasedCourses: {
            "$push": courseId
        }
    })
    res.json({
        msg: "Purchase Completed"
    })
})

router.post('/purchasedCourses', userMiddleware, async (req, res) => {
    // implement listing purchased course logic
    const user = await User.findOne({
        username: req.headers.username
    })
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in" : user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
})

module.exports = router;