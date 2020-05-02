const express = require("express")
const resourcesRouter = require("./resources/resources-router")
const projectsRouter = require("./projects/projects-router")
const tasksRouter = require("./tasks/tasks-router")

const server = express()
const port = 8080

server.use(express.json())
server.use("/resources", resourcesRouter)
server.use("/projects", projectsRouter)
server.use("/tasks", tasksRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
