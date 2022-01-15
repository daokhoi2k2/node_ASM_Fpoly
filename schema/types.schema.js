const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  video_url: String,
  video_duration: Number,
  tickrateId: Number,
  position: String,
  poster: String,
  isShow: Boolean,
  mapId: Number,
});

const Type = mongoose.model("types", typeSchema, 'types');

module.exports = Type;