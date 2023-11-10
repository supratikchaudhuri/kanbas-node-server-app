import "dotenv/config";
import express from "express";
import cors from "cors";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import courseRoutes from "./routes/courses.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";

const app = express();

app.use(express.json()); //parsing http data
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

Lab5(app);
Hello(app);

app.use("/api/courses", courseRoutes);
// app.use("/api/modules", moduleRoutes);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000, () => {
  console.log("server started on port 4000");
});
