const { pool } = require('../index');
const defaultPfp = 'https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';

async function asyncQuery(string, params, oneResult) {
  return pool
    .query(string, params)
    .then((res) => (oneResult ? res.rows[0] : res.rows))
    .catch((err) => err);
}

// quiz queries --------------------------------
async function getQuizzes() {
  const string = 'select quizzes.*, users.username from quizzes left join users on quizzes.id_users = users.id';
  const params = [];
  return asyncQuery(string, params, false);
}

async function getQuestions(data) {
  const string = 'select questions.* from questions right join quizzes on questions.id_quizzes = quizzes.id where quizzes.id = $1';
  const params = [data.quizID];
  return asyncQuery(string, params, false);
}

async function addCompletedQuiz(data) {
  const string = 'insert into users_quizzes (id_users, id_quizzes, score, difficulty) values ($1, $2, $3, $4)';
  const params = [data.userID, data.quizID, data.score, data.difficulty];
  return asyncQuery(string, params, true);
}

async function addQuiz(data) {
  const string = 'insert into quizzes (id_users, name, category) values ($1, $2, $3) returning quizzes.id';
  const params = [data.userID, data.name, data.category];
  return asyncQuery(string, params, true);
}

async function addQuestion(data) {
  const string = 'insert into questions (id_quizzes, body, correctAnswer, incorrectAnswers) values ($1, $2, $3, $4)';
  const params = [data.quizID, data.body, data.correctAnswer, data.incorrectAnswers];
  return asyncQuery(string, params, true);
}

async function getRecentQuizzes() {
  const string = 'select users.username, quizzes.name as quizname, users_quizzes.score, users_quizzes.difficulty from users_quizzes left join users on users_quizzes.id_users = users.id left join quizzes on users_quizzes.id_quizzes = quizzes.id order by users_quizzes.date DESC limit 10';
  const params = [];
  return asyncQuery(string, params, false);
}

async function getLeaders(data) {
  const string = 'Select users.username, users_quizzes.score from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.id_quizzes = $1 order by users_quizzes.score DESC limit 10';
  const params = [data.quizID];
  return asyncQuery(string, params, false);
}

async function getUserQuizzes(data) {
  const string = 'select users_quizzes.*, quizzes.name from quizzes right join users_quizzes on quizzes.id = users_quizzes.id_quizzes where users_quizzes.id_users = $1 limit 10';
  const params = [data.userID];
  return asyncQuery(string, params, false);
}

// users queries --------------------------------
async function getUserPassword(data) {
  const string = 'select password from users where username = $1';
  const params = [data.username];
  return asyncQuery(string, params, true);
}

async function addUser(data) {
  const string = 'insert into users (username, pfp_url, location, password) values ($1, $2, $3, $4) returning id as user_id, username, pfp_url, location';
  const params = [data.username, data.pfpUrl || defaultPfp, data.location, data.password];
  return asyncQuery(string, params, true);
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

async function getUserIdByUserName(data) {
  const string = 'select id as user_id, username, pfp_url, location from users where username = $1';
  const params = [data.username];
  return asyncQuery(string, params, true);
}

async function getUserByUserID(data) {
  const string = 'select id as user_id, username, pfp_url, location from users where id = $1';
  const params = [data.userID];
  return asyncQuery(string, params, true);
}

async function getUserByUsername(data) {
  const string = 'select id as user_id, username, pfp_url, location from users where username = $1';
  const params = [data.username];
  return asyncQuery(string, params, true);
}

// chat queries --------------------------------
async function getChat() {
  const string = 'Select users.username, chat.* from chat left join users on chat.id_users = users.id order by chat.date ASC';
  const params = [];
  return asyncQuery(string, params);
}

async function addToChat(data) {
  const string = 'insert into chat (id_users, body) values ($1, $2)';
  const params = [data.userID, data.body];
  return asyncQuery(string, params);
}

async function getChatAfterTime(data) {
  const string = 'Select users.username, users_quizzes.date from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.date >= ($1::date);';
  const params = [data.timeJoined];
  return asyncQuery(string, params);
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
  getUserByUsername,
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
