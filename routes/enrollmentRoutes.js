const express = require("express");
const { enrollCourse, getStudentEnrollments, dropCourse } = require("../controllers/enrollmentController");
const { auth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/enroll", auth, enrollCourse);
router.get("/my-courses", auth, getStudentEnrollments);
router.delete("/:enrollmentId", auth, dropCourse);

module.exports = router;
