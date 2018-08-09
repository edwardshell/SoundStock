const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// validate data here using requred: true & function for password length
const investorSchema = new Schema({
  name: { type: String },
  author: { type: String },
  password: {type: String},
});

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;