const mongoose = require("mongoose")

const { Schema } = mongoose

const schema = new Schema({
    title: { type: String },
    body: { type: String },
    categories: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})

module.exports = mongoose.model("Article", schema)