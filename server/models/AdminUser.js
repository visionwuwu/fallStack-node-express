const mongoose = require("mongoose");

const { Schema } = mongoose;

const bcrypt = require("bcrypt");

const schema = new Schema({
  username: { type: String, unique: true },
  password: {
    type: String,
    set: (val) => bcrypt.hashSync(val, 10)
  }
});

module.exports = mongoose.model("AdminUser", schema);
