const mongoose = require("mongoose")

const { Schema } = mongoose

const schema = new Schema({
    name: { type: String },
    icon: { type: String }
})

// 定义model
module.exports = mongoose.model("Item", schema)

