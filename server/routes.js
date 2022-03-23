const express = require('express');
const db = require('../database/queries');
const utils = require('./utils');

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
  });
});

router.get('/quiz/scores', (req, res) => {
  db.getRecentQuizzes((e, r) => respond(e, r, res));
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

router.put('/user', async (req, res) => {
  const {
    userID, username, pfpUrl, location, password,
  } = req.body;
  console.log(password);
  db.updateUser({ userID, parameter: 'password', newValue: password })
    .then((r) => res.send(r))
    .catch((e) => res.send(e));
  // Promise.all([
  //   username ? db.updateUser({ userID, parameter: 'username', newValue: username }) : null,
  //   pfpUrl ? db.updateUser({ userID, parameter: 'pfp_url', newValue: pfpUrl }) : null,
  //   location ? db.updateUser({ userID, parameter: 'location', newValue: location }) : null,
  //   password ? db.updateUser({ userID, parameter: 'password', newValue: password }) : null,
  // ])
  //   .then((r) => res.status(200).send(r))
  //   .catch((e) => res.status(500).send(e));
});

router.get('/user/quiz', (req, res) => {
  const { userID } = req.query;
  db.getUserQuiz((e, r) => respond(e, r, res), { userID });
});

router.post('/user/quiz', (req, res) => {
  const {
    userID, quizID, score, difficulty,
  } = req.body;
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
  } = req.body;

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
