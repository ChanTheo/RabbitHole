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

  //ys: ????
  router.get("/emotions/:emotion_id/random", function(req, res) {
    // console.log("req.params", req.params);
    Math.floor(Math.random() * 6) + 1;
    getVideosForEmotion(req.params.emotion_id).then(result => res.json(result));
  });

  //randomVideoFromEmtoion
  // router.get("/emotions/:emotion_id", function(req, res) {
  //   console.log("/emotions/:emotion_id", req.params);
  //   const { id } = req.params;
  //   getVideosForEmotion(id).then(result => res.json(result));
  // });

  // router.get("/surprised", function(req, res) {
  //   getVideo("surprised").then(result => res.json(result));
  // });
  // router.get("/disgusted", function(req, res) {
  //   getVideo("disgusted").then(result => res.json(result));
  // });
  // router.get("/neutral", function(req, res) {
  //   getVideo("neutral").then(result => res.json(result));
  // });
  // router.get("/sad", function(req, res) {
  //   getVideo("sad").then(result => res.json(result));
  // });
  // router.get("/fearful", function(req, res) {
  //   getVideo("fearful").then(result => res.json(result));
  // });
  // router.get("/angry", function(req, res) {
  //   getVideo("angry").then(result => res.json(result));
  // });
  // router.get("/happy", function(req, res) {
  //   getVideo("happy").then(result => res.json(result));
  // });
  return router;
};
