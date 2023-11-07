import express from "express";
import {
  getAllCourses,
  addCourse,
  deleteCourse,
  editCourse,
  getCourse,
} from "../controllers/courses.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.post("/", addCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", editCourse);

export default router;
