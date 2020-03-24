var express = require("express");
var router = express.Router();

module.exports = ({ getAllWatchLogs, getWatchLogByID, createWatchLogEntry }) => {
  router.get("/", function(req, res) {
    getAllWatchLogs().then(response => res.json(response));
  });

  router.get("/:watch_log_id", function(req, res) {
    getWatchLogByID(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  router.post("/:watch_log_id", function(req, res ){
    console.log(req.body)
    const {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent,
    } = req.body 
    createWatchLogEntry(surprised_percent,disgusted_percent, neutral_percent, sad_percent, fearful_percent, angry_percent, happy_percent)
    .then(response => res.json(response))
    .catch(e => console.log(e))
  })

  router.get("/:id/profile", function(req, res) {
    const id = req.params.id;


  })

  
  return router;
};
