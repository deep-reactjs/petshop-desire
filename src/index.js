const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
require("./db");
const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
