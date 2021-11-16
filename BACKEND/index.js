const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Running..");
});

app.listen(3000, function (err) {
  console.log("The server is running");
});
