module.exports = knex => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };

  const getQuotesForUser = id => {
    return knex
      .select("*")
      .from("users")
      .innerJoin("quotes", "users.id", "quotes.user_id")
      .where("users.id", "=", id);
  };

  const registerUser = function (email, username, password) {
    return knex("users")
    .insert({email: email, user_name: username, password: password})
    .returning("*")
    .then(res => res[0])
    // will return the id for login / cookie session 
  }

  const createWatchLogEntry = function (surprised, disgusted, neutral, sad, fearful, angry, happy) {
    return knex("log_entries")
    .insert({
      surprised_percentage: surprised, 
      disgusted_percentage: disgusted,
      neutral_percentage: neutral,
      sad_percentage: sad,
      fearful_perentage: fearful,
      angry_percentage: angry,
      happy_percentage: happy,})
    .returning("*")
    .then(res => res[0])
  }

  const getUserHistory = function (id) {
    return knex("users")

  }

  const getUserbyUserName = function (username) {
    return knex("users")
      .select("*")
      .where("user_name", "=", username)
      .returning("*")
      .then(res => console.log(res))
  }

  return {
    getUsers,
    getQuotesForUser,
    registerUser,
    createWatchLogEntry,
    getUserbyUserName,
  };
};
