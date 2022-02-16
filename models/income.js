const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
		name: {type: String},
		amount: {type: Number},
  frequency: {type: Number},
});

module.exports = mongoose.model('Income', incomeSchema);