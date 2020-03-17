var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register", function(req, res) {
  // extract information from req.body
  registerUser(email, passord, username)
    .then(response => res.json(response))
    .catch(e => console.log(e))
});

module.exports = router;
