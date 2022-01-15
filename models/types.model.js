const type = require("../schema/types.schema");

module.exports = {
	getAllType: () => {
		type.find().then((data) => {
			console.log(data);
		});
	},
};
