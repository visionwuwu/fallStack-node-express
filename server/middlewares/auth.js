module.exports = (app) => {
  return async (req, res, next) => {
    const assert = require("http-assert");
    const jwt = require("jsonwebtoken");
    const token = req.headers.authorization
    
    // token不存在
    assert(token, 401, "请先登录");

    // 校验token
    const result = jwt.verify(token, require("../config/jwt").secret);
    assert(result, 401, "请先登录");

    // 校验成功
    await next();
  };
};
