var express = require("express");
var router = express.Router();

module.exports = ({ getUsers, getQuotesForUser, registerUser }) => {
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    getUsers().then(result => res.json(result));
  });

  router.get("/:id/quotes", function(req, res) {
    const { id } = req.params;
    getQuotesForUser(id).then(result => res.json(result));
  });

  router.post("/register", function(req, res) {
    
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    registerUser(email, username, password)
      .then(response => res.json(response))
      .catch(e => console.log(e))
  });

  router.post("/login", function(req, res ){

  })


  return router;
};
