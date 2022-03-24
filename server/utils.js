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

module.exports = {
  formatQuestions,
};
