module.exports = (app) => {
  const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/kings", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  require("require-all")(__dirname, "/../models/");
};
