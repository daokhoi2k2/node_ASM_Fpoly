const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
	id: Number,
	name: String,
});

// Nếu không có tham số thứ 3 thì sẽ mặc định đặt tên bằng tham số thứ nhất
// const Type = mongoose.model("typess", typeSchema, 'types');
const Type = mongoose.model("types", typeSchema);

module.exports = Type;
