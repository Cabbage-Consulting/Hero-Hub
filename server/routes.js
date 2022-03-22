const express = require('express');
const db = require('../database/queries');

const router = express.Router();

function respond(err, rows, res) {
  if (err) {
    res.status(500).send(err);
  } else {
    res.status(200).send(rows);
  }
}

router.get('/quiz', (req, res) => {
  const { category } = req.query;
  if (category) {
    db.getQuizzesByCategory((e, r) => respond(e, r, res), { category });
  } else {
    db.getQuizzes((e, r) => respond(e, r, res));
  }
});

router.get('/questions', (req, res) => {
  const { quizID } = req.query;
  db.getQuestions((e, r) => respond(e, r, res), { quizID });
});

router.get('/user/password', (req, res) => {
  const { username } = req.query;
  db.getUserPassword((e, r) => respond(e, r, res), { username });
});

router.post('/user', (req, res) => {
  const {
    username, pfpUrl, location, password,
  } = req.query;
  db.addUser((e, r) => respond(e, r, res), {
    username, pfpUrl, location, password,
  });
});

router.get('/user/quiz', (req, res) => {
  const { userID } = req.query;
  db.getUserQuiz((e, r) => respond(e, r, res), { userID });
});

router.post('/user/quiz', (req, res) => {
  const {
    userID, quizID, score, difficulty,
  } = req.query;
  db.addCompletedQuiz((e, r) => respond(e, r, res), {
    userID, quizID, score, difficulty,
  });
});

router.get('/chat', (req, res) => {
  const { dateJoined } = req.query;
  if (dateJoined) {
    db.getChatAfterTime((e, r) => respond(e, r, res), { dateJoined });
  } else {
    db.getChat((e, r) => respond(e, r));
  }
});

// we probably want to fold in question addition into quiz creation,
// but still let it be a "then" or "cb" contingency -
// want to error out if we can't fully add a quiz?
// if a quiz name exists, do a new one.
router.post('/quiz', (req, res) => {
  const {
    userID, name, category, questions,
  } = req.query;
<<<<<<< HEAD
  db.addQuiz((e, r) => respond(e, r, res), {
    userID, name, category,
  });
});

// router.post('/question', (req, res) => {
//   const {
//     quizID, body, correctAnswer, incorrectAnswers,
//   } = req.query;
//   db.addQuestion((e, r) => respond(e, r, res), {
//     quizID, body, correctAnswer, incorrectAnswers,
//   });
// });
=======
  db.addQuiz(() => {}, {
    userID, name, category,
  });
});
>>>>>>> main

router.get('/leaders', (req, res) => {
  const { quizID } = req.query;
  db.getLeaders((e, r) => respond(e, r, res), { quizID });
});

router.post('/chat', (req, res) => {
  const { userID, body } = req.query;
  db.addToChat((e, r) => respond(e, r, res), { userID, body });
});

// POST USER QUIZ

module.exports = router;

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
// we could make router templates for various endpoints
// and this might come in handy as our app grows in complexity

// router.get(/*path, callback*/);

// router.post(/*path, callback*/);
