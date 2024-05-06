const express = require("express");
const { getUserProfile, getUsers } = require("../controllers/user");

const router = express.Router()

router.get("/", getUsers);
router.get("/profile", getUserProfile);


module.exports = router;