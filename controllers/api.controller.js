const lessonModel = require("../models/lessons.model");
const typesModel = require("../models/types.model");
const mapsModel = require("../models/maps.model");
const tickratesModel = require("../models/tickrates.model");
module.exports = {
	index: (req, res) => {
		res.render("admin/index");
	},
	lessons: async (req, res) => {
        const lessons = await lessonModel.getAllLessonExpandMapAndTickRate();
        res.send(lessons);
    },
    deleteLesson: async (req, res) => {
        const id = req.params.id;
        const result = await lessonModel.deleteLesson(id);
        
        if(result.deletedCount > 0) {
            res.send({success: true});
        } else {
            res.send({success: false});
        }
    }
};
