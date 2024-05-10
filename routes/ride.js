const express = require("express");

const { request_ride } = require("../controllers/ride");

const router = express.Router();

router.post("/request-ride", request_ride);

module.exports = router;