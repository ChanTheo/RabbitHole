exports.up = function(knex) {
  return knex.schema.createTable("favorites", t => {
    //favorites
    t.increments("id")
      .primary()
      .unsigned();
    t.integer("user_id")
      .references("id")
      .inTable("users") //users
      .notNull()
      .onDelete("cascade");
    t.integer("video_id")
      .references("id")
      .inTable("videos") //videos
      .notNull()
      .onDelete("cascade");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("favorites"); //favorites
};
