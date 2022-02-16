const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetsSchema = new Schema({
		name: {type: String, required: true},
		value: {type: Number},
});

module.exports = mongoose.model('Assets', assetsSchema);