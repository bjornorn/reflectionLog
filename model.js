// let soveTid = document.getElementById('input1').value;




// console.log(nyDag);

// var yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
// let currentDate = new Date();
// let d = ('0' + currentDate.getDate()).slice(-2);
// let m = ('0' + (currentDate.getMonth() + 1)).slice(-2);
// let y = currentDate.getFullYear();
// let iDag = y + '-' + m + '-' + d;
let iDag;
const model = {
  
  sleepQuestions: {
    questions: ['Dato:', 'Når sovnet du:', 'Når våknet du:'],
    answerFields: ['date', 'time', 'time'],
    alertFields: [false, false, false],
    defaultValue: [iDag, '23:00', '07:00'],
    actualValue: ['', '', ''],
  },

};
  // statusMessages: {
  //   current: '',
  //   idle: 'Fyll inn informasjon i feltene over',
  //   wrongValue: 'Et av feltene inneholder en ugyldig verdi',
  // },

  // sleepQuery: {
  //   wakeUpDate: '',
  //   feltAsleep: '',
  //   wokeUpTime: '',
  //   sleepTime: '',
  // },

  // sleepLog: {},

  // logQuestions: {
  //   q1: 'Spørsmål 1',
  //   q2: 'Spørsmål 2',
  //   q3: 'Spørsmål 3',
  //   q4: 'Spørsmål 4',
  //   q5: 'Spørsmål 5',
  // },
