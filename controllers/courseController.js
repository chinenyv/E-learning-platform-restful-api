const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
    try {
        if (req.user.role !== "instructor") return res.status(403).json({ message: "Only instructors can create courses" });

        const course = await Course.create({ ...req.body, instructor: req.user.userId });
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCourses = async (req, res) => {
    const courses = await Course.find().populate("instructor", "name");
    res.json(courses);
};
