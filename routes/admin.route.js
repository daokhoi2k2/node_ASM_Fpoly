const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");


router.get("/", controller.index);

router.get("/tables", controller.tables);

router.get("/add-lesson", controller.addLesson);

module.exports = router;
