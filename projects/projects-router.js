const express = require("express");
const projectModel = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const projects = await projectModel.getProjects()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newProject = await projectModel.addProject(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})


module.exports = router;