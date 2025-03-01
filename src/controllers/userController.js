const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
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
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password both are required" });
  }
  const userExist = await userModel.findOne({ email });
  if (!userExist) {
    return res.status(404).json({ message: "User not found" });
  }
  const comparePassword = await bcrypt.compare(password, userExist?.password);
  const userData = {
    email: userExist.email,
    id: userExist._id,
  };
  const token = await jwt.sign(userData, "dfsdfsfdsdf", { expiresIn: 3600 });
  console.log(token);
  // console.log(comparePassword);
  // const isUserExist =
  res
    .status(200)
    .json({ message: "Logged in successfully", data: { ...userData, token } });
};
module.exports = { createUser, getAllUsers, loginUser };
