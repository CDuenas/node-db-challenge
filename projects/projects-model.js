const db = require("../data/config")

function getProjects() {
    return db("projects")
}

function addProject(project) {
    return db("projects")
        .insert(project)
}

module.exports = {
    getProjects,
    addProject,
}