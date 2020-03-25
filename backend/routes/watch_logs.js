var express = require("express");
var router = express.Router();

module.exports = ({
  getAllWatchLogs,
  getWatchLogByID,
  getVideosFromWatchLog,
  getLogEntryByWatchlogId
}) => {
  router.get("/", function(req, res) {
    getAllWatchLogs().then(response => res.json(response));
  });

  router.get("/:watch_log_id", function(req, res) {
    getWatchLogByID(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  router.get("/log_entries/:watch_log_id", function(req, res) {
    getLogEntryByWatchlogId(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  router.get("/video/:watch_log_id", function(req, res) {
    getVideosFromWatchLog(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  return router;
};
