const express = require("express");
const { getPetsList, createPet } = require("../controllers/petController");
const auth = require("../middleware/auth");
const upload = require("../middleware/multer");
const router = express.Router();

router.get("/", getPetsList);
router.post("/create", auth, upload.single("petImage"), createPet);
module.exports = router;
