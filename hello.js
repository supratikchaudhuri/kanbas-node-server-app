const Hello = (app) => {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
  app.get("/test", (req, res) => {
    res.send("Testing!");
  });
};

export default Hello;
