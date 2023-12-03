import "dotenv/config";
import express from "express";
import mongoose, { mongo } from "mongoose";
import session from "express-session";
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
    credentials: true, // supports cookies
    origin: process.env.FRONTEND_URL, // restrict cross origin resource sharing to the react application
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

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

const CONNECTION_STRING =
  process.env.MONGODB_CONNECTION_STRING || process.env.MONGODB_URI;
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("Success! Connected to MongoDB.");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on port 4000");
});
