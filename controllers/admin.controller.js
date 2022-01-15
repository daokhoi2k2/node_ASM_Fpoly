const lessonModel = require("../models/lessons.model");
const typesModel = require("../models/types.model");
const mapsModel = require("../models/maps.model");
const tickratesModel = require("../models/tickrates.model");
const moment = require("moment");

module.exports = {
	index: (req, res) => {
		res.render("admin/index");
	},
	tables: async (req, res) => {
		const lessons = await lessonModel.getAllLessonExpandMapAndTickRate();

		res.render("admin/tables", {
			lessons,
			moment,
		});
	},
	addLesson: (req, res) => {
		res.render("admin/add-lesson");
	}
};
