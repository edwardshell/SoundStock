const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const investorSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  password: {type:String, requires: true},
});

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;