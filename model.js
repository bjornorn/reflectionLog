// let soveTid = document.getElementById('input1').value;
var yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
// let currentYear = new Date().getFullYear();
// let currentMonth = new Date().getMonth() + 1;
// let currentDay = new Date().getDate();

let nyDag = new Date().toDateString();
// let today = currentYear + '.' + currentMonth + '.' + currentDay;

console.log(nyDag);

// ALT OVER ER EKSPERIMENTELT

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
    questions: ['Dato:', 'Når sovnet du:', 'Når våknet du:'],
    answerFields: ['date', 'time', 'time'],
    alertFields: [false, false, false],
    defaultValue: ['', '23:00', '07:00', ''],
    actualValue: ['', '', ''],
  },

  sleepRecords: {
    sleep00: ['Dato', 'Sovnet klokken', 'Våknet klokken', 'Lengde Søvn'],
    sleep01: ['01.03.2021', '23:00', '07:00', '8'],
    sleep02: ['02.03.2021', '23:00', '07:00', '8'],
    sleep03: ['03.03.2021', '23:00', '06:00', '8'],
    sleep04: ['04.03.2021', '23:00', '04:00', '8'],
    sleep05: ['05.03.2021', '23:00', '07:00', '8'],
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
let recordCount = Object.keys(model.sleepRecords).length;
