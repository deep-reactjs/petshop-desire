const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
require("./db");
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  if (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
