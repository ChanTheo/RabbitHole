exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("User").del(),
    // knex.raw("ALTER SEQUENCE Emotion_id_seq RESTART WITH 1"),
    knex("User").then(function() {
      // Inserts seed entries
      return knex("User").insert([
        {
          id: 1,
          name: "Bob",
          email: "bob111@abc.com",
          username: "bob111"
        },
        {
          id: 2,
          name: "Tony",
          email: "tony123@aefe.com",
          username: "tony123"
        },
        {
          id: 3,
          name: "yoon",
          email: "kangyoonsoon@hotmail.com",
          username: "hiba02"
        },
        {
          id: 4,
          name: "Cal",
          email: "feafji123@hfitf.com",
          username: "fieja123"
        },
        {
          id: 5,
          name: "Nick",
          email: "nick12345@nnaf.com",
          username: "nick12345"
        },
        {
          id: 6,
          name: "Tom",
          email: "tommy333@ace.com",
          username: "tommy333"
        },
        {
          id: 7,
          name: "Michelle",
          email: "milbwa@gimail.com",
          username: "milbwa"
        },
        {
          id: 8,
          name: "young-il",
          email: "yi@agimai.com",
          username: "yi123"
        }
      ]);
    })
  ]);
};
