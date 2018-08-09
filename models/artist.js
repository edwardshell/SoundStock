const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    songLink: { type: String, required: true },
    imageLink: { type: String, required: true },
    bio: String,
    goal: String 
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;