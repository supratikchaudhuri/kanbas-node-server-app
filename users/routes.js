import * as dao from "./dao.js";

function UserRoutes(app) {
  const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    const status = await dao.deleteUser(userId);
    res.json(status);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await dao.findUserById(userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const updatedUser = req.body;
    const status = await dao.updateUser(userId, updatedUser);

    if (updatedUser._id === req.session["currentUser"]._id) {
      req.session["currentUser"] = updatedUser;
      await req.session.save();
    }
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      console.log("Username already taken");
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const createUser = async (req, res) => {
    const user = req.body;
    const newUser = await dao.createUser(user);
    res.json(newUser);
  };

  const signin = async (req, res) => {
    // console.log(req);
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    req.session.currentUser = currentUser;
    await req.session.save();
    console.log("hrer");
    console.log(req.session["currentUser"]);
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.status(200).json({ message: "Sign out successful" });
  };

  const account = async (req, res) => {
    console.log("account");
    // console.log(req);
    console.log(req.session); // Log the entire session object
    console.log(req.session["currentUser"]);
    res.json(req.session["currentUser"]);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}

export default UserRoutes;
