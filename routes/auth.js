const express = require("express");
const { register } = require("../auth/register");

const router = express.Router();

router.post("/register", register);


module.exports = router;