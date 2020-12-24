const express = require("express")
const app = express()
const router = express.Router()

app.use(express.json())

router.get("/", (req, res) => {
    
    res.send("get resource")
})

router.get("/:id", (req, res) => {
    const params = req.params
    console.log(params)
    res.send("get resource by id")
})

router.post("/", (req, res) => {
    res.send("post resource")
})

router.put("/", (req, res) => {
    res.send("put resource by id")
})

app.post("/admin/api/login", (req, res) => {
    res.send("login")
})

app.use("/admin/api/rest/:resource", (req, res, next) => {
    const params = req.params
    console.log(params)
    next()
}, router)

app.listen(3000, () => {
    console.log("server is running 3000 port")
})