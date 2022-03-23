const questions = [{
  1: {
    question: 'How many siblings does Thor have?',
    correctAnswer: '2',
    incorrectAnswer1: '2',
    incorrectAnswer2: '3',
    incorrectAnswer3: '4',
  },
}, {
  2: {
    question: 'Whast is the name of Thor\'s first hammer?',
    correctAnswer: 'Mjolnir',
    incorrectAnswer1: 'Stormbreaker',
    incorrectAnswer2: 'Wotan',
    incorrectAnswer3: 'Bonko',
  },
}, {
  3: {
    question: 'Thor is the Norse god of what?',
    correctAnswer: 'Thunder',
    incorrectAnswer1: 'Hammers',
    incorrectAnswer2: 'Beer',
    incorrectAnswer3: 'Summer',
  },
}, {
  4: {
    question: 'What is the name of Thor\'s homeland?',
    correctAnswer: 'Asgard',
    incorrectAnswer1: 'Yodenheim',
    incorrectAnswer2: 'Norway',
    incorrectAnswer3: 'Midgard',
  },
}, {
  5: {
    question: 'What is Iron Man\'s derisive nickname for Thor?',
    correctAnswer: 'Point Break',
    incorrectAnswer1: 'Strongest Avenger',
    incorrectAnswer2: 'Pikachu',
    incorrectAnswer3: 'Zippy',
  },
}];

module.exports.data = {
  userID: 1,
  name: 'Thor Quiz #1',
  category: 'Marvel', // update to Marvel
  questions,
};
