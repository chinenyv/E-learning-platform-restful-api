const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);
