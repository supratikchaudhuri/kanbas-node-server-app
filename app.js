import "dotenv/config";
import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import courseRoutes from "./routes/courses.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import UserRoutes from "./users/routes.js";

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
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Success! Connected to MongoDB.");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on port 4000");
});
