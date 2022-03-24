const express = require('express');
const db = require('../database/queries');
const { formatQuestions, formatQuizzesObject } = require('./utils');

const router = express.Router();

router.get('/quiz', async (req, res) => {
  db.getQuizzes()
    .then((d) => res.status(200).send(formatQuizzesObject(d)))
    .catch((e) => res.status(500).send(e));
});

router.get('/quiz/scores', async (req, res) => {
  db.getRecentQuizzes()
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
});

router.get('/questions', async (req, res) => {
  const { quizID } = req.query;
  db.getQuestions({ quizID })
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
});

router.get('/user/password', async (req, res) => {
  const { username } = req.query;
  db.getUserPassword({ username })
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
});

router.get('/user', async (req, res) => {
  const { userID } = req.query;
  db.getUserByUserID({ userID })
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
});

router.post('/user', async (req, res) => {
  const {
    username, pfpUrl, location, password,
  } = req.body;
  db.addUser({
    username, pfpUrl, location, password,
  })
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
});

router.put('/user', async (req, res) => {
  const {
    userID, username, pfpUrl, location, password,
  } = req.body;

  Promise.all([
    username ? db.updateUsername({ userID, newValue: username }) : null,
    pfpUrl ? db.updateUserProfilePicture({ userID, newValue: pfpUrl }) : null,
    location ? db.updateUserLocation({ userID, newValue: location }) : null,
    password ? db.updateUserPassword({ userID, newValue: password }) : null,
  ])
    .then(() => db.getUserByUserID({ userID })
      .then((user) => res.status(200).send(user)))
    .catch((e) => res.status(500).send(e));
});

router.get('/user/quiz', async (req, res) => {
  const { userID } = req.query;
  db.getUserQuizzes({ userID })
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
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
  } = req.body.data;

  const quizID = await db.addQuiz({
    userID, name, category, questions,
  });
  if (typeof quizID === 'object') {
    res.status(500).send('something went wrong creating the quiz');
  }
  const formattedQuestions = formatQuestions(questions);

  Promise.all(formattedQuestions.map(
    (q) => db.addQuestion({
      quizID,
      body: q.question,
      correctAnswer: q.correctAnswer,
      incorrectAnswers: q.incorrectAnswers,
    }),
  )).then((r) => res.send(r))
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

module.exports = router;
