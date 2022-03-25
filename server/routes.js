const express = require('express');
const db = require('../database/queries');
const { formatQuestions, formatQuizzesObject } = require('./utils');

const router = express.Router();

async function query(res, func, arg) {
  func.call(null, arg)
    .then((d) => res.status(200).send(d))
    .catch((e) => res.status(500).send(e));
}

router.get('/quiz', async (req, res) => {
  db.getQuizzes()
    .then((d) => res.status(200).send(formatQuizzesObject(d)))
    .catch((e) => res.status(500).send(e));
});

router.get('/quiz/scores', async (req, res) => {
  query(res, db.getRecentQuizzes);
});

router.get('/questions', async (req, res) => {
  const { quizID } = req.query;
  query(res, db.getQuestions, { quizID });
});

// response for this will be { password: password }
router.get('/user/password', async (req, res) => {
  const { username } = req.query;
  query(res, db.getUserPassword, { username });
});

router.get('/user', async (req, res) => {
  const { userID } = req.query;
  query(res, db.getUserByUserID, { userID });
});

// this route will return with new user info
router.post('/user', async (req, res) => {
  const {
    username, pfpUrl, location, password,
  } = req.body;
  query(res, db.addUser, {
    username, pfpUrl, location, password,
  });
});

// this route will respond with all user info, including updates
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
    .then(() => query(res, db.getUserByUserID, { userID }));
});

router.get('/user/quiz', async (req, res) => {
  const { userID } = req.query;
  query(res, db.getUserQuizzes, { userID });
});

router.post('/user/quiz', (req, res) => {
  const {
    userID, quizID, score, difficulty,
  } = req.body;
  query(res, db.addCompletedQuiz, {
    userID, quizID, score, difficulty,
  });
});

// getChatAfterTime may not work depending on dateJoined as string or Date
router.get('/chat', (req, res) => {
  const { dateJoined } = req.query;
  if (dateJoined) {
    query(res, db.getChatAfterTime({ dateJoined }));
  } else {
    query(res, db.getChat, {});
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
  )).then((r) => res.status(200).send(r))
    .catch((err) => res.status(500).send(err));
});

router.get('/leaders', (req, res) => {
  const { quizID } = req.query;
  query(res, db.getLeaders, { quizID });
});

router.post('/chat', (req, res) => {
  const { userID, body } = req.body;
  query(res, db.addToChat, { userID, body });
});

module.exports = router;
