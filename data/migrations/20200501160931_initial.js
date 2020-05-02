exports.up = async function (knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("project").notNull().unique()
        table.text("description")
        table.boolean("completed").notNull().defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("resource").notNull().unique()
        table.text("description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNull().unique()
        table.text("notes")
        table.boolean("completed").notNull().defaultTo(false)
        table.integer("project_id").references("id").inTable("projects").onDelete("SET NULL")
    })

    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("project_id").references("id").inTable("projects")
        table.integer("resource_id").references("id").inTable("resources")
        table.primary(["project_id", "resource_id"])
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
}

