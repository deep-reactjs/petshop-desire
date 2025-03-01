const express = require("express");
const userModel = require("../models/user");
const {
  getAllUsers,
  createUser,
  loginUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");
const router = express.Router();

// To get the list of all users
router.get("/", getAllUsers);
router.post("/login", loginUser);
router.post("/create", createUser);

module.exports = router;
