function showRegisterPage() {
  mainView();
  registerSleepView();
}

function showStatisticsPage() {
  mainView();
  statisticsView();
}

function storeSleepRecord() {
  calculateSleepTime();

  for (
    let i = 0;
    i < Object.values(model.sleepQuestions.actualValue).length;
    i++
  ) {
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
    (model.sleepQuestions.actualValue[3] = sleepTotal),
  ];
  recordCount++;
  // console.log(Object.values(database.sleepRecords)[6]);
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

function editMode(n) {
  for (let i = 1; i < Object.keys(database.sleepRecords).length; i++) {
    editHtml = `<td><input type="date" value="${
      Object.values(database.sleepRecords)[i][0]
    }"/></td>
     <td><input type=time" value="${
       Object.values(database.sleepRecords)[i][1]
     }"/></td>
     <td><input type=time" value="${
       Object.values(database.sleepRecords)[i][2]
     }"/></td>
     <td>${Object.values(database.sleepRecords)[i][3]}</td>
     <td><button class="button2" onclick="editMode(${i})">&#128393</button></td>
     <td><button class="button2" onclick="deleteKey(${i})">⌫</button></td>
    `;
  }
  let riktigRad = 'rad' + n;
  let editRow = document.getElementById(riktigRad);
  editRow.innerHTML = editHtml;
  // editRow.innerHTML = `<input></input>`;

  console.log(riktigRad);
}

function deleteKey(n) {
  //slett fra view
  slettes = document.getElementById('rad' + n);
  slettes.remove();

  //slett fra objekt(database)
  objNr = 'sleep' + n;
  delete database.sleepRecords[objNr];

  // console.log(slettes);
  // console.log(objNr);
}

// sortere tabell funksjon fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_desc
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById('sleepTable');
  switching = true;
  //Set the sorting direction to ascending:
  dir = 'asc';
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}
