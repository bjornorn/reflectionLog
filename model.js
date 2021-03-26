// let soveTid = document.getElementById('input1').value;
var yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
// let currentYear = new Date().getFullYear();
// let currentMonth = new Date().getMonth() + 1;
// let currentDay = new Date().getDate();

let nyDag = new Date().toDateString();
// let today = currentYear + '.' + currentMonth + '.' + currentDay;

console.log(nyDag);

// ALT OVER ER EKSPERIMENTELT
let currentDate = new Date();
let d = currentDate.getDate();
let m = currentDate.getMonth();
let y = currentDate.getFullYear();

const model = {
  user: {
    name: 'Bjørn',
    email: 'bjorn@getacademy.no',
  },

  clockWorks: {
    sleepHour: '',
    sleepMinute: '',
  },

  sleepQuestions: {
    questions: ['Dato:', 'Når sovnet du:', 'Når våknet du:'],
    answerFields: ['date', 'time', 'time'],
    alertFields: [false, false, false],
    defaultValue: ['currentDate', '23:00', '07:00', ''],
    actualValue: ['', '', ''],
  },

  statusMessages: {
    current: '',
    idle: 'Fyll inn informasjon i feltene over',
    wrongValue: 'Et av feltene inneholder en ugyldig verdi',
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
