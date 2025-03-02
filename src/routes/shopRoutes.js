const express = require("express");
const auth = require("../middleware/auth");
const {
  getShopDetails,
  createShopDetails,
  updateShopDetails,
  deleteShop,
} = require("../controllers/shopController");
const router = express.Router();

router.get("/", auth, getShopDetails);
router.post("/create", auth, createShopDetails);
router.patch("/update/:id", auth, updateShopDetails);
router.delete("/delete/:id", auth, deleteShop);
module.exports = router;
