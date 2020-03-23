exports.up = function(knex) {
  return knex.schema.createTable("videos", t => {
    //videos
    t.increments("id")
      .primary()
      .unsigned();
    t.string("url");
    t.string("title");
    t.string("description");
    t.string("duration");
    t.string("yt_video_id"); // yt_video_id
    t.string("img");
    t.integer("emotion_id")
      .references("id")
      .inTable("emotions") //emotions
      .notNull()
      .onDelete("cascade");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("videos"); //videos
};
