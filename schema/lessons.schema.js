const mongoose = require("mongoose");

const lessonSchema = {
  video_url: String,
  video_duration: Number,
  tickrateId: Number,
  position: String,
  poster: String,
  isShow: Boolean,
  mapId: Number,
};

const Lesson = mongoose.model("Lessons", lessonSchema, "lessons");

module.exports = Lesson;
