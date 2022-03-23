const express = require('express');
const db = require('../database/queries');
const utils = require('./utils');
const test_data = require('../database/data/api_questions');
// remove test data and file

const router = express.Router();

function respond(err, rows, res) {
  if (err) {
    res.status(500).send(err);
  } else {
    res.status(200).send(rows);
  }
}

router.get('/quiz', (req, res) => {
  db.getQuizzes((e, r) => {
    if (e) {
      respond(e, null, res);
    } else {
      const q = {};
      r.forEach((i) => {
        if (q[i.category]) {
          q[i.category].push(i);
        } else {
          q[i.category] = [i];
        }
      });
      respond(null, q, res);
    }
    // respond(e, r, res);
  });
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
  } = req.body;
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
    db.getChat((e, r) => respond(e, r, res));
  }
});

router.post('/quiz', async (req, res) => {
  const {
    userID, name, category, questions,
  } = test_data.data;

  // need to check if quiz ID exists

  const quizID = await db.addQuiz({
    userID, name, category, questions,
  });
  if (typeof quizID === 'object') {
    res.status(500).send('something went wrong creating the quiz');
  }
  const formattedQuestions = utils.formatQuestions(questions);

  Promise.all(formattedQuestions.map(
    (q) => db.addQuestion({
      quizID,
      body: q.question,
      correctAnswer: q.correctAnswer,
      incorrectAnswers: q.incorrectAnswers,
    }),
  )).then((x) => res.send(x))
    .catch((err) => res.send(err));
});

router.get('/leaders', (req, res) => {
  const { quizID } = req.query;
  db.getLeaders((e, r) => respond(e, r, res), { quizID });
});

router.post('/chat', (req, res) => {
  const { userID, body } = req.body;
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
