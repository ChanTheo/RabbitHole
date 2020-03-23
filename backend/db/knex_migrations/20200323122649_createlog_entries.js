exports.up = function(knex) {
  return knex.schema.createTable("log_entries", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.integer("video_id")
      .references("id")
      .inTable("videos") //videos
      .notNull()
      .onDelete("cascade");
    t.integer("watch_log_id") //watch_logs
      .references("id")
      .inTable("watch_logs") //watch_logs
      .notNull()
      .onDelete("cascade");
    t.integer("surprised_percent");
    t.integer("disgusted_percent");
    t.integer("neutral_percent");
    t.integer("sad_percent");
    t.integer("fearful_percent");
    t.integer("angry_percent");
    t.integer("happy_percent");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("log_entries");
};
