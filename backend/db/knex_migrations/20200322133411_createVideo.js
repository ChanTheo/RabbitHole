exports.up = function(knex) {
  return knex.schema.createTable("Video", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("url");
    t.string("title");
    t.string("description");
    t.string("duration");
    t.string("videoId");
    t.string("img");
    t.integer("emotion_id")
      .references("id")
      .inTable("Emotion")
      .notNull()
      .onDelete("cascade");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("Video");
};
