exports.up = function(knex) {
  return knex.schema.createTable("users", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("user_name");
    t.string("email");
    t.string("password");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
