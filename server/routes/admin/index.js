module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const resource = require("../../middlewares/resource");
  const auth = require("../../middlewares/auth");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");

  // 获取资源
  router.get("/", (req, res) => {});

  // 根据id获取资源
  router.get("/:id", (req, res) => {});

  // 创建资源
  router.post("/", (req, res) => {});

  // 根据id更新资源
  router.put("/:id", (req, res) => {});

  // 根据id删除资源
  router.delete("/:id", (req, res) => {});

  // 登录接口
  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;
    const model = require("../../models/AdminUser");
    const user = await model.findOne({ username }).select("+password");

    assert(user, 422, "用户不存在");

    const hasTruePsw = bcrypt.compareSync(password, user.password);

    assert(hasTruePsw, 422, "密码不正确");

    // jwt签名,返回token
    res.json({
      message: "登录成功",
      token: jwt.sign(
        {
          id: user._id
        },
        require("../../config/jwt").secret,
        { expiresIn: "24h" }
      )
    });
  });

  // 注册接口
  app.post("/admin/api/register", async (req, res) => {
    const { username } = req.body;
    const model = require("../../models/AdminUser");
    const user = await model.findOne({ username });

    assert(!user, 422, "用户已存在")

    await model.create(req.body)

    res.json({
      code: 1,
      message: "注册成功"
    })
  })

  // 上传图片接口
  const multer = require("multer");
  const path = require("path");
  const upload = multer({
    dest: path.resolve(__dirname, "../../../src/uploads/")
  });
  app.post(
    "/admin/api/upload",
    auth(app),
    upload.single("file"),
    (req, res) => {
      // 上传成功
      res.json({
        message: "上传成功",
        file: req.file
      });
    }
  );

  // 获取所有的资源
  app.use(
    "/admin/api/rest/:resource",
    auth(app),
    resource(app),
    async (req, res, next) => {
      await next();
    },
    router
  );
};
