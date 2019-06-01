exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .unique()
        .notNullable();
      tbl.string("description");
      tbl.integer("bool_flag").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      tbl.string("description");
      tbl.string("notes");
      tbl.integer("bool_flag").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("actions"),
    knex.schema.dropTableIfExists("projects")
  ]);
};
