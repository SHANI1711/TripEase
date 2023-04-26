const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	userId: {
		type: Number,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	date: {
		type: String,
		require: false,
	},
});

module.exports = mongoose.model('post', postSchema);
