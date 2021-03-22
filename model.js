// let soveTid = document.getElementById('input1').value;
var yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
const model = {
  user: {
    name: 'Bjørn',
    email: 'bjorn@getacademy.no',
  },

  clockWorks: {
    currentDate: new Date(),
    // yesterDate: nyDato.setDate(nyDato.getDate() - 1).toLocaleDateString(),
    sleepHour: '',
    sleepMinute: '',
  },

  sleepQuestions: {
    questions: ['Når sovnet du:', 'Når våknet du:', 'Sov du godt?'],
    answerFields: ['date', 'time', 'text'],
    defaultValue: ['', '', '', ''],
    actualValue: ['', '', '', ''],
  },

  sleepQuery: {
    wakeUpDate: '',
    feltAsleep: '',
    wokeUpTime: '',
    sleepTime: '',
  },

  sleepLog: {},

  logQuestions: {
    q1: 'Spørsmål 1',
    q2: 'Spørsmål 2',
    q3: 'Spørsmål 3',
    q4: 'Spørsmål 4',
    q5: 'Spørsmål 5',
  },
};
