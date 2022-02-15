const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debtsSchema = new Schema({
		name: {type: String},
		amount: {type: Number},
		category: {type: String},
});

module.exports = mongoose.model('Debts', debtsSchema);