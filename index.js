const logger = require("./logger"); //custom middleware
const Joi = require("joi"); //validation rules
const express = require("express");
const demoroute = require("./routes/demoroute");
const app = express();

app.use(express.json());
app.use(logger);
app.use("/home", demoroute);

app.use(function(req, res, next) {
  console.log("Authenticating...");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Listening on port 3000..."));
