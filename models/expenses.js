const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
		name: {type: String},
		amount: {type: Number},
  category: {type: String},
  frequency: {type: Number},
		}, {
		timestamps: true
});

module.exports = mongoose.model('Expenses', expensesSchema);