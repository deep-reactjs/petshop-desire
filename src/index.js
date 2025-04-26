const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const shopRoutes = require("./routes/shopRoutes");
const petRoutes = require("./routes/petsRoutes");
require("./db");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/shop", shopRoutes);
app.use("/pet", petRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use((error, req, res, next) => {
  console.log(error);
  if (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
