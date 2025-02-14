const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");

exports.enrollCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: "Course not found" });

        const enrollmentExists = await Enrollment.findOne({ student: req.user.userId, course: courseId });
        if (enrollmentExists) return res.status(400).json({ message: "Already enrolled in this course" });

        const enrollment = await Enrollment.create({ student: req.user.userId, course: courseId });
        res.status(201).json({ message: "Enrolled successfully", enrollment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ student: req.user.userId }).populate("course", "title instructor duration price");
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.dropCourse = async (req, res) => {
    try {
        const { enrollmentId } = req.params;
        const enrollment = await Enrollment.findById(enrollmentId);
        if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

        if (enrollment.student.toString() !== req.user.userId) return res.status(403).json({ message: "Unauthorized" });

        await enrollment.deleteOne();
        res.json({ message: "Course dropped successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
