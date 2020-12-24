const express = require("express");
const app = express();

app.use(express.json());
// 定义admin路由
require("./routes/admin")(app);
// 连接mongodb数据库
require("./plugins/db")(app);

// 以3000端口号启动服务
app.listen(3000, () => {
  console.log("server is running 3000 port");
});
