function showRegisterPage() {
  mainView();
  registerSleepView();
}

function showStatisticsPage() {
  mainView();
  statisticsView();
}

function registerNewSleep() {}

function alertFieldMessage() {
  for (let i = 0; i < model.sleepQuestions.actualValue.length; i++) {
    if (model.sleepQuestions.actualValue[i] == '') {
      console.log(model.sleepQuestions.actualValue[i]);
      model.sleepQuestions.alertFields[i] = 'Sett inn en gyldig verdi';
         return alert ('feil verdi');
    }

    if (model.sleepQuestions.actualValue[i] != false) {
      model.sleepQuestions.alertFields[i] = true;
    }
  }

  navn = 'sleep' + recordCount.toString();
  model.sleepRecords[navn] = [
    model.sleepQuestions.actualValue[0],
    model.sleepQuestions.actualValue[1],
    model.sleepQuestions.actualValue[2],
  ];
  recordCount++;
  console.log(Object.values(model.sleepRecords)[6]);
  // model.sleepRecords.sleep06 = model.sleepQuestions.actualValue[1];

  showRegisterPage();
  // if (model.sleepQuestions.actualValue[i] == "") {
  //  alert ('kake');
}
