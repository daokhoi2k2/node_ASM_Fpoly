const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");


router.get("/", controller.index);

router.get("/tables", controller.tables);

module.exports = router;
