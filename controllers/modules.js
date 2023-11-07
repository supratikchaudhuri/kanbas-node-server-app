import db from "../Database/index.js";

export const getCourseModules = async (req, res) => {
  try {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.status(200).send(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
