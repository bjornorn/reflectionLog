const database = {
  sleepRecords: {
    sleep0: ['2021-01-01', '23:00', '07:00', '8:0'],
    sleep1: ['2021-02-01', '23:00', '07:00', '8:0'],
    sleep2: ['2021-02-02', '23:30', '07:00', '7:30'],
    sleep3: ['2021-02-03', '23:00', '07:00', '8:0'],
    sleep4: ['2021-02-04', '23:00', '06:00', '8:0'],
    sleep5: ['2021-02-05', '23:00', '04:00', '8:0'],
    sleep6: ['2021-02-06', '23:00', '07:00', '8:0'],
  },
  sleepData: { 
    headers: ['Dato', 'Sovnet', 'Våknet', 'Sov i </br>(timer:min)'] 
  },
  };

let recordCount = Object.keys(database.sleepRecords).length;

