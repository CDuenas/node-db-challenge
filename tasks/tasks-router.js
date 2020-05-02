const express = require("express");
const taskModel = require("./tasks-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const tasks = await taskModel.getTasks()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newTask = await taskModel.addTask(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})


module.exports = router;