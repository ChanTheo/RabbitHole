exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("emotions").del(), //emotions
    // knex.raw("ALTER SEQUENCE Emotion_id_seq RESTART WITH 1"),
    knex("emotions").then(function() {
      //emotions
      // Inserts seed entries
      return knex("emotions").insert([
        {
          id: 1,
          emoji: "neutral",
          description: ":neutral_face:"
        },
        {
          id: 2,
          emoji: "angry",
          description: ":rage:"
        },
        {
          id: 3,
          emoji: "happy",
          description: ":grin:"
        },
        {
          id: 4,
          emoji: "sad",
          description: ":cry:"
        },
        {
          id: 5,
          emoji: "fearful",
          description: ":scream:"
        },
        {
          id: 6,
          emoji: "disgusted",
          description: ":nauseated_face:"
        },
        {
          id: 7,
          emoji: "surprised",
          description: ":astonished:"
        }
      ]);
    })
  ]);
};
