import express from "express";
import cors from "cors";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import courseRoutes from "./routes/courses.js";

const app = express();

app.use(express.json()); //parsing http data
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

Lab5(app);
Hello(app);

app.use("/api/courses", courseRoutes);

app.listen(4000, () => {
  console.log("server started on port 4000");
});
