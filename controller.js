function showRegisterPage() {
  mainView();
  registerSleepView();
}

function showStatisticsPage() {
  mainView();
  statisticsView();
}

function storeSleepRecord() {
  for (let i = 0; i < model.sleepQuestions.actualValue.length; i++) {
    if (model.sleepQuestions.actualValue[i] == '') {
      console.log(model.sleepQuestions.actualValue[i]);
      model.sleepQuestions.alertFields[i] = 'Sett inn en gyldig verdi';
      return alert('feil verdi');
    }

    if (model.sleepQuestions.actualValue[i] != false) {
      model.sleepQuestions.alertFields[i] = true;
    }
  }

  navn = 'sleep' + recordCount.toString();
  database.sleepRecords[navn] = [
    model.sleepQuestions.actualValue[0],
    model.sleepQuestions.actualValue[1],
    model.sleepQuestions.actualValue[2],
  ];
  recordCount++;
  console.log(Object.values(database.sleepRecords)[6]);
  // database.sleepRecords.sleep06 = model.sleepQuestions.actualValue[1];

  showRegisterPage();
  // if (model.sleepQuestions.actualValue[i] == "") {
  //  alert ('kake');
}

function calculateSleepTime() {
  let sovneTime = parseInt(model.sleepQuestions.actualValue[1].substr(0, 2));
  let sovneMinutt = parseInt(model.sleepQuestions.actualValue[1].substr(3, 5));
  let vakneTime = parseInt(model.sleepQuestions.actualValue[2].substr(0, 2));
  let vakneMinutt = parseInt(model.sleepQuestions.actualValue[2].substr(3, 5));

  sovneSum = sovneTime * 60 + sovneMinutt;
  vakneSum = vakneTime * 60 + vakneMinutt;

  if (vakneSum < sovneSum) {
    vakneSum += 1440; // et døgn er 1440 minutter
  }

  sumMin = vakneSum - sovneSum;
  totalHour = Math.floor(sumMin / 60);
  totalMin = sumMin - totalHour * 60;
  sleepTotalMsg =
    totalHour.toString() + ' timer og ' + totalMin.toString() + ' min';
  sleepTotal = totalHour + ':' + totalMin;

  console.log(sleepTotal);
}

function sander() {
  var tallet2 = 250;
  var tallet3 = 3;

  var SVAR = tallet2 * tallet3;

  console.log('Svaret er: ' + SVAR);
}
