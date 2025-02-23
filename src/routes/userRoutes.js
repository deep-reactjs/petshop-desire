const express = require("express");
const userModel = require("../models/user");
const router = express.Router();

// To get the list of all users
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/create", async (req, res) => {
  try {
    const data = req.body;
    // const encryptedPassword = await bcrypt.hash(data.password, 10); // implemented in routes/userRoutes.js
    // data.password = encryptedPassword;
    const savedUserData = await userModel.create(data);
    res.status(201).json({
      message: "User created successfully",
      data: savedUserData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
