const lessonModel = require("../models/lessons.model");
module.exports = {
    index: (req, res) => {
        
        res.render("admin/index");
    },
    tables: (req, res) => {
        lessonModel.getAllLesson();
        res.render("admin/tables");
    }
}

