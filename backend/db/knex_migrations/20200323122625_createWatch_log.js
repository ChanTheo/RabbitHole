exports.up = function(knex) {
  return knex.schema.createTable("watch_logs", t => {
    //watch_logs
    t.increments("id")
      .primary()
      .unsigned();
    t.integer("user_id")
      .references("id")
      .inTable("users") //users
      .notNull()
      .onDelete("cascade");
    t.boolean("is_public");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("watch_logs"); //watch_logs
};
