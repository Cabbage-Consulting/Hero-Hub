const express = require('express');

const router = express.Router();

// routes: chat users questions
// quiz/ -- GET quiz by category
// quiz/ -- POST new quiz
// quiz/users -- checks whether a user has taken a quiz (checkmark on any quiz already completed)
// quiz/users -- POST add id pairs, score, and timestamp to join table
// quiz/scores -- GET top 10, sort descending for leaderboard
// quiz/users/date -- GET 10 latest quiz completions and scores to display on homepage
// users/ POST -- register a new user
// users/ GET -- compare data to login info?
// users/ PUT -- update user info -- if time to implement
// chat/ -- POST and GET

// router.use(/*middleware for this router*/);
// // we could make router templates for various endpoints
// // and this might come in handy as our app grows in complexity

// router.get(/*path, callback*/);

// router.post(/*path, callback*/);

module.exports = router;
