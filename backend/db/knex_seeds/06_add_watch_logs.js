exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("watch_logs").del(),
    // knex.raw("ALTER SEQUENCE Emotion_id_seq RESTART WITH 1"),
    knex("watch_logs").then(function() {
      // Inserts seed entries
      return knex("watch_logs").insert([
        {
          id: 1,
          user_id: 1,
          is_public: true
        },
        {
          id: 2,
          user_id: 2,
          is_public: true
        }
      ]);
    })
  ]);
};