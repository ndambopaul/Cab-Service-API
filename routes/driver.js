const express = require("express");

const { onboard_driver, get_drivers } = require("../controllers/driver");
const router = express.Router();

router.get("/", get_drivers);
router.post("/new-driver", onboard_driver);


module.exports = router