function formatQuestions(questions) {
  return questions.map((obj) => {
    const questionObj = Object.values(obj)[0];
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

module.exports = {
  formatQuestions,
};
