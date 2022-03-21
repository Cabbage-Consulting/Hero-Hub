const express = require('express');

const router = express.Router();

// routes: chat users questions
// questions/ -- GET quiz by character and difficulty
// questions/users -- GET check which questions a user has interacted with
// questions/users -- POST add id pairs to join table
// users/scores -- GET top 10, sort descending for leaderboard
// users/scores -- PUT update user score on completion of a quiz
// chat -- POST and GET

router.use(/*middleware for this router*/);
// we could make router templates for various endpoints
// and this might come in handy as our app grows in complexity

router.get(/*path, callback*/);

router.post(/*path, callback*/);

module.exports = router;
