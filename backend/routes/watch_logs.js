var express = require("express");
var router = express.Router();

module.exports = ({ getAllWatchLogs, getWatchLogByID }) => {
  router.get("/watch_logs", function(req, res) {
    getAllWatchLogs().then(response => res.json(response));
  });

  router.get("/watch_logs/:watch_log_id", function(req, res) {
    getWatchLogByID(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  return router;
};
