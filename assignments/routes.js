import db from "../Database/index.js";

const AssignmentRoutes = (app) => {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    try {
      const { cid } = req.params;
      const assignments = db.assignments.filter((a) => a.course === cid);
      res.status(200).send(assignments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    try {
      const { cid } = req.params;
      const newAssignment = {
        ...req.body,
        course: cid,
        _id: new Date().getTime().toString(),
      };
      db.assignments.push(newAssignment);
      res.status(200).send(newAssignment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.put("/api/assignments/:aid", (req, res) => {
    try {
      const { aid } = req.params;
      const updatedAssignment = req.body;
      db.assignments = db.assignments.map((a) =>
        a._id === aid ? updatedAssignment : a
      );
      res.status(200).send(updatedAssignment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    try {
      const { aid } = req.params;
      db.assignments = db.assignments.filter((a) => a._id !== aid);
      res.status(200).send({ message: "Assignment deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

export default AssignmentRoutes;
