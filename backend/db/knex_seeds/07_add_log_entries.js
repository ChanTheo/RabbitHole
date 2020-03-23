exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("log_entries").del(),
    // knex.raw("ALTER SEQUENCE Emotion_id_seq RESTART WITH 1"),
    knex("log_entries").then(function() {
      // Inserts seed entries
      return knex("log_entries").insert([
        {
          id: 1,
          video_id: 1,
          watch_log_id: 1,
          surprised_percent: 10,
          disgusted_percent: 10,
          neutral_percent: 20,
          sad_percent: 10,
          fearful_percent: 20,
          angry_percent: 30,
          happy_percent: 10
        },
        {
          id: 2,
          video_id: 2,
          watch_log_id: 2,
          surprised_percent: 30,
          disgusted_percent: 10,
          neutral_percent: 30,
          sad_percent: 10,
          fearful_percent: 10,
          angry_percent: 10,
          happy_percent: 10
        }
      ]);
    })
  ]);
};
