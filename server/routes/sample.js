const express = require("express");
const router = express.Router();
const { sampleGet, sampleData, getSampleID } = require("../controllers/sample");


router.route("/").get(sampleGet).post(sampleGet);
router.route("/data").get(sampleData);
router.route("/data/:id").get(getSampleID);

module.exports = router;
