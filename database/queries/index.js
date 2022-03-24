const { pool } = require('../index');

// helper functions --------------------------------
function query(string, params, cb) {
  pool
    .query(string, params)
    .then((res) => cb(null, res.rows))
    .catch((err) => cb(err));
}

async function asyncQuery(string, params, oneResult) {
  return pool
    .query(string, params)
    .then((res) => (oneResult ? res.rows[0] : res.rows))
    .catch((err) => err);
}

// quiz queries --------------------------------
function getQuizzes(cb) {
  const string = 'select quizzes.*, users.username from quizzes left join users on quizzes.id_users = users.id';
  const params = [];
  query(string, params, cb);
}

function getQuestions(cb, data) {
  const string = 'select questions.* from questions right join quizzes on questions.id_quizzes = quizzes.id where quizzes.id = $1';
  const params = [data.quizID];
  query(string, params, cb);
}

function addCompletedQuiz(cb, data) {
  const string = 'insert into users_quizzes (id_users, id_quizzes, score, difficulty) values ($1, $2, $3, $4)';
  const params = [data.userID, data.quizID, data.score, data.difficulty];
  query(string, params, cb);
}

async function addQuiz(data) {
  const string = 'insert into quizzes (id_users, name, category) values ($1, $2, $3) returning quizzes.id';
  const params = [data.userID, data.name, data.category];
  pool.query(string, params);
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
  return asyncQuery(string, params);
}

function getRecentQuizzes(cb) {
  const string = 'select users.username, quizzes.name as quizname, users_quizzes.score, users_quizzes.difficulty from users_quizzes left join users on users_quizzes.id_users = users.id left join quizzes on users_quizzes.id_quizzes = quizzes.id order by users_quizzes.date DESC limit 10';
  const params = [];
  query(string, params, cb);
}

function getLeaders(cb, data) {
  const string = 'Select users.username, users_quizzes.score from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.id_quizzes = $1 order by users_quizzes.score DESC limit 10';
  const params = [data.quizID];
  query(string, params, cb);
}

function getUserQuizzes(cb, data) {
  const string = 'select users_quizzes.*, quizzes.name from quizzes right join users_quizzes on quizzes.id = users_quizzes.id_quizzes where users_quizzes.id_users = $1 limit 10';
  const params = [data.userID];
  query(string, params, cb);
}

// users queries --------------------------------
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

async function updateUserPassword(data) {
  const string = 'update users set password = $2 where id = $1';
  const params = [data.userID, data.newValue];
  return asyncQuery(string, params, true);
}

async function updateUsername(data) {
  const string = 'update users set username = $2 where id = $1';
  const params = [data.userID, data.newValue];
  return asyncQuery(string, params, true);
}

async function updateUserProfilePicture(data) {
  const string = 'update users set pfp_url = $2 where id = $1';
  const params = [data.userID, data.newValue];
  return asyncQuery(string, params, true);
}

async function updateUserLocation(data) {
  const string = 'update users set location = $2 where id = $1';
  const params = [data.userID, data.newValue];
  return asyncQuery(string, params, true);
}

async function getUserIdByUserName(cb, data) {
  const string = 'select id as user_id, username, pfp_url, location from users where username = $1';
  const params = [data.username];
  // query(string, params, cb);
  return asyncQuery(string, params, true);
}

async function getUserByUserID(data) {
  const string = 'select id, username, pfp_url, location from users where id = $1';
  const params = [data.userID];
  return asyncQuery(string, params, true);
}

// chat queries --------------------------------
function getChat(cb) {
  const string = 'Select users.username, chat.* from chat left join users on chat.id_users = users.id order by chat.date ASC';
  const params = [];
  query(string, params, cb);
}

function addToChat(cb, data) {
  const string = 'insert into chat (id_users, body) values ($1, $2)';
  const params = [data.userID, data.body];
  query(string, params, cb);
}

function getChatAfterTime(cb, data) {
  const string = 'Select users.username, users_quizzes.date from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.date >= ($1::date);';
  const params = [data.timeJoined];
  query(string, params, cb);
}

module.exports = {
  getQuizzes,
  getQuestions,
  addCompletedQuiz,
  addQuiz,
  addQuestion,
  getRecentQuizzes,
  getLeaders,
  getUserQuizzes,
  getUserPassword,
  getUserIdByUserName,
  addUser,
  updateUserPassword,
  updateUsername,
  updateUserProfilePicture,
  updateUserLocation,
  getUserByUserID,
  getChat,
  addToChat,
  getChatAfterTime,
};
