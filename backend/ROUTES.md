With a very quick comment on the routes to know what they do

# VIDEO ROUTES

- GET /api/videos --> Get all videos
- GET /api/videos/emotions/:emotion_id --> gets all videos based user emotion/mood
- GET /api/videos/:video_id --> gets a single video

- GET /api/videos/emotions/:emotion_id/random --> gets a randomly chosen video to be played based on user emotion/mood
  select all videos with specific emotionid, then chose a random element in the index of the returning array

# USER ROUTES

- POST /api/users/logout --> cookie is cleared
- POST /api/users/login --> username and password are compared, cookie is set
- POST /api/users/register --> username, email and password are entered into db, cookie is set
- GET /api/users/:user_id --> gets the user info
- GET /api/users/:user_id/watch_logs --> gets the user watch logs

# WATCH LOG ROUTES

- GET /api/watch_logs --> gets all the watchlog
- GET /api/watch_logs/:watch_log_id --> gets the watchlog
- POST /api/watch_logs/:watch_log_id --> adds an entry to the watch log
  (No router)
