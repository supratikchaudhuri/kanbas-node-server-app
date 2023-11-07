import db from "../Database/index.js";

export const getAllCourses = async (req, res) => {
  try {
    const allCourses = db.courses;
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = db.courses.find((course) => course._id === id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addCourse = async (req, res) => {
  try {
    const newCourse = {
      _id: new Date().getTime().toString(),
      ...req.body,
    };
    db.courses.push(newCourse);
    res.status(200).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    db.courses = db.courses.filter((course) => course._id !== id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = req.body;
    db.courses = db.courses.map((course) =>
      course._id === id ? updatedCourse : course
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
