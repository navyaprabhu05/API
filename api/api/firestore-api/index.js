const express = require("express");
const app = express();

app.get("/get-latest", (req, res) => {
  res.json({ message: "API is working!" });
});

module.exports = app;
