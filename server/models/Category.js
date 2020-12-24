const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Category", schema);
