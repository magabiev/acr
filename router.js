const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.get("/from", (req, res) => {
  const user = router.get("/clients");
  console.log(user);
});

server.use(function (req, res, next) {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(function (req, res, next) {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Use default router
// server.use(router)
server.listen(3000, function () {
  console.log("JSON Server is running");
});
// "dev": "concurrently \"npm start\" \"json-server --routes router.js --watch db.json --port 3005\""
