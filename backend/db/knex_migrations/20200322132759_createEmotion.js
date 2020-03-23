exports.up = function(knex) {
  return knex.schema.createTable("emotions", t => {
    //emotions
    t.increments("id")
      .primary()
      .unsigned();
    t.string("emoji");
    t.string("description");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("emotions"); //emotions
};
