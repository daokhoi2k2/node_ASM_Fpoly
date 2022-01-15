const tickrate = require("../schema/tickrates.schema");

module.exports = {
	getAllTickrates: () => {
		tickrate.find().then((data) => {
			console.log(data);
		});
	},
};
