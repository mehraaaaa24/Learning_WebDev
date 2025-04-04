const { Router } = require("express");
const adminMiddleware = require("../middleware/admin-middleware");
const router = Router();
const {Admin, Course} = require("../db/database")

router.post('/signup', async (req, res) => {
    // implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if the user already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
    
})

router.post('/courses', adminMiddleware, async (req, res) => {
    // implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg: "Course Created successfully", courseId: newCourse._id
    })
})

router.get('/courses', adminMiddleware, async (req, res) => {
    // implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
})


module.exports = router;