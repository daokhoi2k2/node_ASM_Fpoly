const express = require("express");
const router = express.Router();
const controller = require("../controllers/api.controller.js");


router.get("/", controller.index);

router.get("/lessons", controller.lessons);

router.delete("/lessons/:id", controller.deleteLesson);

module.exports = router;
