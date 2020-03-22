exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("Video").del(),
    // knex.raw("ALTER SEQUENCE Video_id_seq RESTART WITH 1"),
    knex("Video").then(function() {
      // Inserts seed entries
      return knex("Video").insert([
        {
          id: 1,
          url: "https://www.youtube.com/embed/Yi0OZe7QFBg",
          title: "neutral",
          description: "neutral",
          duration: "1 min",
          videoId: "Yi0OZe7QFBg",
          img: "https://img.youtube.com/vi/1VVvXojzgDs/default.jpg",
          emotion_id: 1
        },
        {
          id: 2,
          url: "https://www.youtube.com/embed/iaQed_Xdyvw",
          title: "neutral",
          description: "neutral",
          duration: "1 min",
          videoId: "iaQed_Xdyvw",
          img: "https://img.youtube.com/vi/iaQed_Xdyvw/default.jpg",
          emotion_id: 1
        },
        {
          id: 3,
          url: "https://www.youtube.com/embed/5DqTuWve9t8",
          title: "neutral",
          description: "neutral",
          duration: "1 min",
          videoId: "5DqTuWve9t8",
          img: "https://img.youtube.com/vi/5DqTuWve9t8/default.jpg",
          emotion_id: 1
        },
        {
          id: 4,
          url: "https://www.youtube.com/embed/ar-GwpxHd14",
          title: "neutral",
          description: "neutral",
          duration: "1 min",
          videoId: "ar-GwpxHd14",
          img: "https://img.youtube.com/vi/ar-GwpxHd14/default.jpg",
          emotion_id: 1
        },
        {
          id: 5,
          url: "https://www.youtube.com/embed/d3EHZo6CIl8",
          title: "neutral",
          description: "neutral",
          duration: "1 min",
          videoId: "d3EHZo6CIl8",
          img: "https://img.youtube.com/vi/d3EHZo6CIl8/default.jpg",
          emotion_id: 1
        },

        {
          id: 6,
          url: "https://www.youtube.com/embed/agQxuaSnR9g",
          title: "angry",
          description: "angry",
          duration: "1 min",
          videoId: "agQxuaSnR9g",
          img: "https://img.youtube.com/vi/agQxuaSnR9g/default.jpg",
          emotion_id: 2
        },
        {
          id: 7,
          url: "https://www.youtube.com/embed/Bwq7h8sLObw",
          title: "angry",
          description: "angry",
          duration: "1 min",
          videoId: "Bwq7h8sLObw",
          img: "https://img.youtube.com/vi/Bwq7h8sLObw/default.jpg",
          emotion_id: 2
        },
        {
          id: 8,
          url: "https://www.youtube.com/embed/liOBKV_PsMI",
          title: "angry",
          description: "angry",
          duration: "1 min",
          videoId: "liOBKV_PsMI",
          img: "https://img.youtube.com/vi/liOBKV_PsMI/default.jpg",
          emotion_id: 2
        },
        {
          id: 9,
          url: "https://www.youtube.com/embed/RfMnKGtJno8",
          title: "angry",
          description: "angry",
          duration: "1 min",
          videoId: "RfMnKGtJno8",
          img: "https://img.youtube.com/vi/RfMnKGtJno8/default.jpg",
          emotion_id: 2
        },
        {
          id: 10,
          url: "https://www.youtube.com/embed/MinEShIQHHM",
          title: "angry",
          description: "angry",
          duration: "1 min",
          videoId: "MinEShIQHHM",
          img: "https://img.youtube.com/vi/MinEShIQHHM/default.jpg",
          emotion_id: 2
        },

        {
          id: 11,
          url: "https://www.youtube.com/embed/RGTtBVeoRTA",
          title: "happy",
          description: "happy",
          duration: "1 min",
          videoId: "RGTtBVeoRTA",
          img: "https://img.youtube.com/vi/RGTtBVeoRTA/default.jpg",
          emotion_id: 3
        },
        {
          id: 12,
          url: "https://www.youtube.com/embed/oZRQlLPyOw4",
          title: "happy",
          description: "happy",
          duration: "1 min",
          videoId: "oZRQlLPyOw4",
          img: "https://img.youtube.com/vi/oZRQlLPyOw4/default.jpg",
          emotion_id: 3
        },
        {
          id: 13,
          url: "https://www.youtube.com/embed/KycyslbAGaI",
          title: "happy",
          description: "happy",
          duration: "1 min",
          videoId: "KycyslbAGaI",
          img: "https://img.youtube.com/vi/KycyslbAGaI/default.jpg",
          emotion_id: 3
        },
        {
          id: 14,
          url: "https://www.youtube.com/embed/BSwpONX7uL4",
          title: "happy",
          description: "happy",
          duration: "1 min",
          videoId: "BSwpONX7uL4",
          img: "https://img.youtube.com/vi/BSwpONX7uL4/default.jpg",
          emotion_id: 3
        },
        {
          id: 15,
          url: "https://www.youtube.com/embed/fUbNzCqI_Z4",
          title: "happy",
          description: "happy",
          duration: "1 min",
          videoId: "fUbNzCqI_Z4",
          img: "hhttps://img.youtube.com/vi/fUbNzCqI_Z4/default.jpg",
          emotion_id: 3
        },

        {
          id: 16,
          url: "https://www.youtube.com/embed/ndy_97isp1Q",
          title: "sad",
          description: "sad",
          duration: "1 min",
          videoId: "ndy_97isp1Q",
          img: "https://img.youtube.com/vi/ndy_97isp1Q/default.jpg",
          emotion_id: 4
        },
        {
          id: 17,
          url: "https://www.youtube.com/embed/WDc6wIm2VoI",
          title: "sad",
          description: "sad",
          duration: "1 min",
          videoId: "WDc6wIm2VoI",
          img: "https://img.youtube.com/vi/WDc6wIm2VoI/default.jpg",
          emotion_id: 4
        },
        {
          id: 18,
          url: "https://www.youtube.com/embed/qHE0n5c6-6g",
          title: "sad",
          description: "sad",
          duration: "1 min",
          videoId: "qHE0n5c6-6g",
          img: "https://img.youtube.com/vi/qHE0n5c6-6g/default.jpg",
          emotion_id: 4
        },
        {
          id: 19,
          url: "https://www.youtube.com/embed/_JhaVNJb3ag",
          title: "sad",
          description: "sad",
          duration: "1 min",
          videoId: "_JhaVNJb3ag",
          img: "https://img.youtube.com/vi/_JhaVNJb3ag/default.jpg",
          emotion_id: 4
        },
        {
          id: 20,
          url: "https://www.youtube.com/embed/6Xl5GSvyVfU",
          title: "sad",
          description: "sad",
          duration: "1 min",
          videoId: "6Xl5GSvyVfU",
          img: "https://img.youtube.com/vi/6Xl5GSvyVfU/default.jpg",
          emotion_id: 4
        },

        {
          id: 21,
          url: "https://www.youtube.com/embed/B1iJoKd0TW0",
          title: "fearful",
          description: "fearful",
          duration: "1 min",
          videoId: "B1iJoKd0TW0",
          img: "https://img.youtube.com/vi/B1iJoKd0TW0/default.jpg",
          emotion_id: 5
        },
        {
          id: 22,
          url: "https://www.youtube.com/embed/AGSr2_LW0R4",
          title: "fearful",
          description: "fearful",
          duration: "1 min",
          videoId: "AGSr2_LW0R4",
          img: "https://img.youtube.com/vi/AGSr2_LW0R4/default.jpg",
          emotion_id: 5
        },
        {
          id: 23,
          url: "https://www.youtube.com/embed/3mWjHsqWjcs",
          title: "fearful",
          description: "fearful",
          duration: "1 min",
          videoId: "3mWjHsqWjcs",
          img: "https://img.youtube.com/vi/3mWjHsqWjcs/default.jpg",
          emotion_id: 5
        },
        {
          id: 24,
          url: "https://www.youtube.com/embed/AwOzOZTRn54",
          title: "fearful",
          description: "fearful",
          duration: "1 min",
          videoId: "AwOzOZTRn54",
          img: "https://img.youtube.com/vi/AwOzOZTRn54/default.jpg",
          emotion_id: 5
        },
        {
          id: 25,
          url: "https://www.youtube.com/embed/m59LFiJpn5M",
          title: "fearful",
          description: "fearful",
          duration: "1 min",
          videoId: "m59LFiJpn5M",
          img: "https://img.youtube.com/vi/m59LFiJpn5M/default.jpg",
          emotion_id: 5
        },

        {
          id: 26,
          url: "https://www.youtube.com/embed/mScqow5J7zk",
          title: "disgusted",
          description: "disgusted",
          duration: "1 min",
          videoId: "mScqow5J7zk",
          img: "https://img.youtube.com/vi/mScqow5J7zk/default.jpg",
          emotion_id: 6
        },
        {
          id: 27,
          url: "https://www.youtube.com/embed/Oei9zGB5GiY",
          title: "disgusted",
          description: "disgusted",
          duration: "1 min",
          videoId: "Oei9zGB5GiY",
          img: "https://img.youtube.com/vi/Oei9zGB5GiY/default.jpg",
          emotion_id: 6
        },
        {
          id: 28,
          url: "https://www.youtube.com/embed/sfTOB4ZjN_c",
          title: "disgusted",
          description: "disgusted",
          duration: "1 min",
          videoId: "sfTOB4ZjN_c",
          img: "https://img.youtube.com/vi/sfTOB4ZjN_c/default.jpg",
          emotion_id: 6
        },
        {
          id: 29,
          url: "https://www.youtube.com/embed/_urM1guMNF8",
          title: "disgusted",
          description: "disgusted",
          duration: "1 min",
          videoId: "_urM1guMNF8",
          img: "https://img.youtube.com/vi/_urM1guMNF8/default.jpg",
          emotion_id: 6
        },
        {
          id: 30,
          url: "https://www.youtube.com/embed/iRfWwvK0u1A",
          title: "disgusted",
          description: "disgusted",
          duration: "1 min",
          videoId: "iRfWwvK0u1A",
          img: "https://img.youtube.com/vi/iRfWwvK0u1A/default.jpg",
          emotion_id: 6
        },

        {
          id: 31,
          url: "https://www.youtube.com/embed/LJG9Q8e5fZk",
          title: "surprised",
          description: "surprised",
          duration: "1 min",
          videoId: "Yi0OZLJG9Q8e5fZke7QFBg",
          img: "https://img.youtube.com/vi/LJG9Q8e5fZk/default.jpg",
          emotion_id: 7
        },
        {
          id: 32,
          url: "https://www.youtube.com/embed/1I-3vJSC-Vo",
          title: "surprised",
          description: "surprised",
          duration: "1 min",
          videoId: "1I-3vJSC-Vo",
          img: "https://img.youtube.com/vi/1I-3vJSC-Vo/default.jpg",
          emotion_id: 7
        },
        {
          id: 33,
          url: "https://www.youtube.com/embed/T99eO41xwqE",
          title: "surprised",
          description: "surprised",
          duration: "1 min",
          videoId: "T99eO41xwqE",
          img: " https://img.youtube.com/vi/T99eO41xwqE/default.jpg",
          emotion_id: 7
        },
        {
          id: 34,
          url: "https://www.youtube.com/embed/8yrk7Sp3Xto",
          title: "surprised",
          description: "surprised",
          duration: "1 min",
          videoId: "8yrk7Sp3Xto",
          img: "https://img.youtube.com/vi/8yrk7Sp3Xto/default.jpg",
          emotion_id: 7
        },
        {
          id: 35,
          url: "https://www.youtube.com/embed/IA5oNIOs3z8",
          title: "surprised",
          description: "surprised",
          duration: "1 min",
          videoId: "IA5oNIOs3z8",
          img: "https://img.youtube.com/vi/IA5oNIOs3z8/default.jpg",
          emotion_id: 7
        }
      ]);
    })
  ]);
};
