const database = {
  sleepRecords: {
    sleep0: ['Dato', 'Sovnet klokken', 'Våknet klokken', 'Lengde Søvn'],
    sleep1: ['01.03.2021', '23:00', '07:00', '8'],
    sleep2: ['02.03.2021', '23:00', '07:00', '8'],
    sleep3: ['03.03.2021', '23:00', '06:00', '8'],
    sleep4: ['04.03.2021', '23:00', '04:00', '8'],
    sleep5: ['05.03.2021', '23:00', '07:00', '8'],
  },
};

let recordCount = Object.keys(database.sleepRecords).length;
