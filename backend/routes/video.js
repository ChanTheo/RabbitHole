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
  router.get("/", function (req, res) {
    console.log("/videos");
    getVideos().then(result => res.json(result));
  });



  //ys: gets a single video

  //ys: ????
  router.get("/emotions/random/:emotion_id", function (req, res) {
    const emotion_id = req.params.emotion_id
    console.log(emotion_id)
    const idWithNoColon = emotion_id.split("").shift()
    const idWithNoColonAsNumber = parseInt(idWithNoColon, 10)

    getVideosForEmotion(idWithNoColonAsNumber).then(result => {
      let randomVideo;
      const randomInt = Math.floor(Math.random() * Math.floor(result.length))
      console.log("randomint", randomInt)
      for (let i = 0; i < result.length; i++) {
        if (i === randomInt) {
          randomVideo = result[i]
        }
      }
      res.json(randomVideo)
    });
  });

  //ys: gets all videos based user emotion/mood
  router.get("/emotions/:emotion_id", function (req, res) {
    console.log("req.params", req.params);
    getVideosForEmotion(req.params.emotion_id).then(result => res.json(result));
  });

  //ys: gets a single video
  router.get("/:video_id", function (req, res) {
    console.log("req.params");
    getSingleVideo(req.params.video_id).then(result => res.json(result));
  });


  return router;
};
