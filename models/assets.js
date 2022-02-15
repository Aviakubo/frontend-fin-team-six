const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetsSchema = new Schema({
		name: {type: String, required: true},
		rating: {type: Number},
		}, {
		timestamps: true
});

module.exports = mongoose.model('Assets', assetSchema);