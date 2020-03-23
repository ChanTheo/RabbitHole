exports.up = function(knex) {
  return knex.schema.createTable("User", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("name");
    t.string("email");
    t.string("username");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("User");
};