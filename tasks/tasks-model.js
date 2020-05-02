const db = require("../data/config")

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.id")
        .select("t.*", "p.project", "p.description")
}

function addTask(task) {
    return db("tasks as t")
        .insert(task)
}

module.exports = {
    getTasks,
    addTask,
}
