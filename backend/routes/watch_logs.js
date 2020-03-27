var express = require("express");
var router = express.Router();

module.exports = ({
  getAllWatchLogs,
  getWatchLogByID,
  getVideosFromWatchLog,
  getLogEntryByWatchlogId,
  createWatchLogEntry,
  getWatchLogsForUser
}) => {
  router.get("/", function(req, res) {
    getAllWatchLogs().then(response => res.json(response));
  });

  // router.get("/:user_id", function(req, res) {
  //   console.log("Here", req.params.user_id )
  //   // getWatchLogByID  getWatchLogsForUser
  //   getWatchLogByID(req.params.user_id).then(response => {
  //     console.log("in then", response)
  //     res.json(response)
  //   }
  //   );
  // });

  router.get("/:watch_log_id", function(req, res) {
    getWatchLogByID(req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });

  router.post("/:watch_log_id", function(req, res) {
    console.log(req.body);
    const {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent,
      video_id,
      watch_log_id
    } = req.body;
    createWatchLogEntry(
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent,
      watch_log_id,
      video_id
    )
      .then(response => {
        console.log(response);
        res.json(response);
      })
      .catch(e => console.log(e));
  });

  router.get("/:id/profile", function(req, res) {
    const id = req.params.id;
  });

  router.get("/log_entries/:watch_log_id", function(req, res) {
    console.log("/log_entries/${watchlogid}", req.params.watch_log_id)
    getVideosFromWatchLog (req.params.watch_log_id).then(response =>
      res.json(response)
    );
  });


  router.get("/:userID/log_entries", function(req, res) {
    getLogEntryByWatchlogId(req.params.userID).then(response =>
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
