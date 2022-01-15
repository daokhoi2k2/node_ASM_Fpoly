const type = require("../schema/maps.schema");

module.exports = {
	getAllMap: () => {
		type.find().then((data) => {
			console.log(data);
		});
	},
};
