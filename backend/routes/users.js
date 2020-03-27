var express = require("express");
var router = express.Router();
const cookieSession = require("cookie-session");

router.use(
  cookieSession({
    name: "session",
    keys: ["random", "tea", "sky", "hello there", "something else"],
    maxAge: 1000 * 60 * 60 * 24
  })
);

module.exports = ({
  getUsers,

  getQuotesForUser,
  registerUser,
  getVideos,
  getEmotions,
  getVideoForEmotion,
  getUser,
  createWatchLog,
  validateUserLogin,
  getUserbyEmail
}) => {
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    console.log("users", req.session.user_id);
    getUsers().then(result => {
      req.session.user_id = result.id;
      res.json(result);
    });
  });

  router.post("/register", function(req, res) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    registerUser(email, username, password)
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  router.post("/login", function(req, res) {
    console.log(req.body);
    const username = req.body.email;
    const password = req.body.password;
    validateUserLogin(username, password).then(response => {
      console.log("in then", response);
      res.json(response);
    });
  });

  router.post("/logout", function(req, res) {
    req.session.user_id = null;
  });

  //creates a watchlog

  router.post("/watch_logs/:user_id", function(req, res) {
    console.log(req.params.user_id);
    createWatchLog(req.params.user_id).then(response => res.json(response));
  });

  router.post("/:user_id/watch_logs/:watch_log_id/log_entry", function(
    req,
    res
  ) {
    console.log(req.body);
    const {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent
    } = req.body;
    createWatchLogEntry(
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent
    )
      .then(response => res.json(response))
      .catch(e => console.log(e));
  });

  router.get("/:id/profile", function(req, res) {
    const id = req.params.id;
  });

  // router.post("/login", function(req, res) {
  //   const username = req.body.email;
  //   const password = req.body.password;
  //   getUserByUsername(username).then(response => {
  //     console.log("in then", response);
  //   });
  // });
  // router.post("/login", function(req, res) {
  //   const username = req.body.email;
  //   const password = req.body.password;
  //   getUserByUsername(username).then(response => {
  //     console.log("in then", response);
  //   });
  // });
  //Francis
  router.post("/login", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    getUserByEmail(email).then(response => {
      console.log("in then", response);
      res.json(response);
    });
  });

  //ys
  router.get("/:users_id", function(req, res) {
    console.log("userid", req.params.users_id);
    getUserInfo(req.params.users_id).then(result => res.json(result));
  });

  return router;
};
