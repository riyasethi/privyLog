const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    title: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Journal", JournalSchema);
