const mongoose = require('mongoose');
const lesson = require("../schema/lessons.schema");

module.exports = {
	getAllLesson: () => {
		return lesson.find();
	},
	getAllLessonExpandMapAndTickRate: () => {
		return lesson.find().populate("mapId").populate("tickrateId");
	},
	deleteLesson: (_id) => {
		return lesson.deleteOne({_id}).then((data) => {
			return data;
		})
	}
};
