function formatQuestions(questions) {
  return questions.map((questionObj) => {
    const { question, correctAnswer } = questionObj;
    const incorrectAnswers = [];
    Object.keys(questionObj).forEach(
      (parameter) => {
        if (parameter.includes('incorrect')) {
          incorrectAnswers.push(questionObj[parameter]);
        }
      },
    );
    return { question, correctAnswer, incorrectAnswers };
  });
}

function formatQuizzesObject(quizzesResponse) {
  const response = {};
  quizzesResponse.forEach(
    (quiz) => {
      if (response[quiz.category]) {
        response[quiz.category].push(quiz);
      } else {
        response[quiz.category] = [quiz];
      }
    },
  );
  return response;
}

module.exports = {
  formatQuestions,
  formatQuizzesObject,
};
