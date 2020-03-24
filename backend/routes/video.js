var express = require("express");
var router = express.Router();

module.exports = ({
  getUsers,
  getQuotesForUser,
  registerUser,
  getVideos,
  getEmotions,
  getVideosForEmotion,
  getUser,
  getVideo,
  getSingleVideo
}) => {
  // routes go here

  //ys: Get all videos
  router.get("/", function(req, res) {
    console.log("/videos");
    getVideos().then(result => res.json(result));
  });

  //ys: gets all videos based user emotion/mood
  router.get("/emotions/:emotion_id", function(req, res) {
    console.log("req.params", req.params);
    getVideosForEmotion(req.params.emotion_id).then(result => res.json(result));
  });

  //ys: gets a single video
  router.get("/:video_id", function(req, res) {
    console.log("req.params");
    getSingleVideo(req.params.video_id).then(result => res.json(result));
  });

  //ys: random video ???? FIXIT ????
  router.get("/emotions/:emotion_id/random", function(req, res) {
    // console.log("req.params", req.params);
    Math.floor(Math.random() * 6) + 1;
    getVideosForEmotion(req.params.emotion_id).then(result => res.json(result));
  });

  return router;
};
