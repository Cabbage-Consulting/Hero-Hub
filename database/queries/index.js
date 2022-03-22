const { pool } = require('../index');

function query(string, params, cb) {
  pool
    .query(string, params)
    .then((res) => cb(null, res.rows))
    .catch((err) => { cb(err); });
}
//need to handle if there are no rows

function getQuizzes(cb) {
  const string = 'select * from quizzes';
  const params = [];
  query(string, params, cb);
}

function getQuestions(cb, data) {
  const string = 'select * from questions right join quizzes on questions.id_quizzes = quizzes.id where quizzes.id = $1';
  const params = [data.quizID];
  query(string, params, cb);
}

function getUserPassword(cb, data) {
  const string = 'select password from users where username = $1';
  const params = [data.username];
  query(string, params, cb);
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
  const string = 'select users_quizzes.*, quizzes.name from quizzes right join users_quizzes on quizzes.id = users_quizzes.id_quizzes where users_quizzes.id_users = $1';
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

function addQuiz(cb, data) {
  const string = 'insert into quizzes (id_users, name, category) values ($1, $2, $3)';
  const params = [data.userID, data.name, data.category];
  query(string, params, cb);
}

function addQuestion(cb, data) {
  const string = 'insert into questions (id_quizzes, body, correctAnswer, incorrectAnswers) values ($1, $2, $3, $4)';
  const params = [data.quizID, data.body, data.correctAnswer, data.incorrectAnswers];
  query(string, params, cb);
}

function getLeaders(cb, data) {
  const string = 'Select users.username, users_quizzes.score from users right join users_quizzes on users_quizzes.id_users = users.id where users_quizzes.id_quizzes = $1 order by users_quizzes.score DESC;';
  const params = [data.quizID];
  query(string, params, cb);
}

module.exports = {
  getQuizzes,
  getQuestions,
  getUserPassword,
  getChat,
  getChatAfterTime,
  getUserQuiz,
  addCompletedQuiz,
  addToChat,
  addQuiz,
  addQuestion,
  getLeaders,
};