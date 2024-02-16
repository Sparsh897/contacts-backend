const express = require("express");
const { registerUser } = require("../controllers/userController");
registerUser
const router = express.Router();

router.post("/register");

router.post("/register", (req, res) => {
  res.json({ message: "Login User" });
});

router.get("/register", (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = router;
