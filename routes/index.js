const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

router.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard</h1>");
});

module.exports = router;
