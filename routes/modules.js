import express from "express";
import { getCourseModules } from "../controllers/modules.js";

const router = express.Router();

router.get("/:id", getCourseModules);

export default router;
