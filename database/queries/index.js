const { pool } = require('../index');

function query(string, params, cb) {
  pool
    .query(string, params)
    .then((res) => cb(null, res.rows))
    .catch((err) => cb(err));
}

function getQuizzes(cb) {
  const string = 'select quizzes.*, users.username from quizzes left join users on quizzes.id_users = users.id';
  const params = [];
  query(string, params, cb);
}

function getRecentQuizzes(cb) {
  const string = 'select users.username, quizzes.name as quizname, users_quizzes.score, users_quizzes.difficulty from users_quizzes left join users on users_quizzes.id_users = users.id left join quizzes on users_quizzes.id_quizzes = quizzes.id order by users_quizzes.date DESC limit 10';
  const params = [];
  query(string, params, cb);
}

// add an index on category in schema for faster lookup?
function getQuizzesByCategory(cb, data) {
  const string = 'select quizzes.*, users.username from quizzes left join users on quizzes.id_users = users.id where quizzes.category = $1';
  const params = [data.category];
  query(string, params, cb);
}

function getQuestions(cb, data) {
  const string = 'select questions.* from questions right join quizzes on questions.id_quizzes = quizzes.id where quizzes.id = $1';
  const params = [data.quizID];
  query(string, params, cb);
}

function getUserPassword(cb, data) {
  const string = 'select password from users where username = $1';
  const params = [data.username];
  query(string, params, cb);
}

function addUser(cb, data) {
  const string = 'insert into users (username, pfp_url, location, password) values ($1, $2, $3, $4)';
  const params = [data.username, data.pfpUrl, data.location, data.password];
  query(string, params, cb);
}

async function updateUser(data) {
  console.log(data);
  const string = 'update users set password = $3 where id = $1';
  const params = [data.userID, data.parameter, data.newValue];
  pool
    .query(string, params)
    .then((res) => res)
    .catch((err) => err);
}

function getChat(cb) {
  const string = 'Select users.username, chat.* from chat left join users on chat.id_users = users.id order by chat.date ASC';
  const params = [];
  query(string, params, cb);
}

function getChatAfterTime(cb, data) {
  const string = 'Select users.username, users_quizzes.date from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.date >= ($1::date);';
  const params = [data.timeJoined];
  query(string, params, cb);
}

function getUserQuiz(cb, data) {
  const string = 'select users_quizzes.*, quizzes.name from quizzes right join users_quizzes on quizzes.id = users_quizzes.id_quizzes where users_quizzes.id_users = $1 limit 10';
  const params = [data.userID];
  query(string, params, cb);
}

function addCompletedQuiz(cb, data) {
  const string = 'insert into users_quizzes (id_users, id_quizzes, score, difficulty) values ($1, $2, $3, $4)';
  const params = [data.userID, data.quizID, data.score, data.difficulty];
  query(string, params, cb);
}

function addToChat(cb, data) {
  const string = 'insert into chat (id_users, body) values ($1, $2)';
  const params = [data.userID, data.body];
  query(string, params, cb);
}

function getLeaders(cb, data) {
  const string = 'Select users.username, users_quizzes.score from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.id_quizzes = $1 order by users_quizzes.score DESC limit 10';
  const params = [data.quizID];
  query(string, params, cb);
}

function getMatchingQuizzes(cb, data) {
  const string = 'select * from quizzes where name = $1';
  const params = [data.name];
  query(string, params, cb);
}

async function addQuiz(data) {
  const string = 'insert into quizzes (id_users, name, category) values ($1, $2, $3) returning quizzes.id';
  const params = [data.userID, data.name, data.category];
  try {
    const res = await pool.query(string, params);
    return res.rows[0].id;
  } catch (error) {
    return error;
  }
}

async function addQuestion(data) {
  const string = 'insert into questions (id_quizzes, body, correctAnswer, incorrectAnswers) values ($1, $2, $3, $4)';
  const params = [data.quizID, data.body, data.correctAnswer, data.incorrectAnswers];
  pool
    .query(string, params)
    .then((res) => res)
    .catch((err) => err);
}

module.exports = {
  getQuizzes,
  getQuizzesByCategory,
  getMatchingQuizzes,
  getRecentQuizzes,
  getQuestions,
  getUserPassword,
  addUser,
  updateUser,
  getChat,
  getChatAfterTime,
  getUserQuiz,
  addCompletedQuiz,
  addToChat,
  addQuiz,
  addQuestion,
  getLeaders,
};
