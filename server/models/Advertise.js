const mongoose = require("mongoose")

const { Schema } = mongoose

const schema = new Schema({
    name: { type: String },
    items: [{
        url: { type: String },
        image: { type: String }
    }]
})

module.exports = mongoose.model("Advertise", schema)