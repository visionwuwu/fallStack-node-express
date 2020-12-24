module.exports = (app) => {
  return async (req, res, next) => {
    const modelName = require("inflection").classify(req.params.resource);
    req.modelName = modelName;
    req.Model = require("../models/" + modelName);
    await next();
  };
};
