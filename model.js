// global variablel
let iDag;


const model = {
  
  sleepQuestions: {
    questions: ['Dato:', 'Når sovnet du:', 'Når våknet du:'],
    answerFields: ['date', 'time', 'time'],
    alertFields: [false, false, false],
    defaultValue: [iDag, '23:00', '07:00'],
    actualValue: ['', '', ''],
  },

  buttonControl: {
    buttonOn: true,
  }
};

