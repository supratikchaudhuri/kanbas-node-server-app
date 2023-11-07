import db from "../Database/index.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", (req, res) => {
    try {
      const { cid } = req.params;
      const modules = db.modules.filter((m) => m.course === cid);
      res.status(200).send(modules);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/courses/:cid/modules", (req, res) => {
    try {
      const { cid } = req.params;
      const newModule = {
        ...req.body,
        course: cid,
        _id: new Date().getTime().toString(),
      };
      db.modules.push(newModule);
      res.status(200).send(newModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/modules/:mid", (req, res) => {
    try {
      const { mid } = req.params;
      db.modules = db.modules.filter((m) => m._id !== mid);
      res.status(200).send({ message: "Module deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/modules/:mid", (req, res) => {
    try {
      const { mid } = req.params;
      const updatedModule = req.body;
      db.modules = db.modules.map((m) => (m._id === mid ? updatedModule : m));
      res.status(200).send(updatedModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
export default ModuleRoutes;
