const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const formattedToken = token.split(" ")[1];
    const verifyToken = jwt.verify(formattedToken, "dfsdfsfdsdf1");
    req.user = verifyToken;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = auth;
