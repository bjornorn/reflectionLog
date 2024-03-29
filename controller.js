function clockWorks() {
    // let yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
    currentDate = new Date();
    d = ('0' + currentDate.getDate()).slice(-2);
    m = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    y = currentDate.getFullYear();
    iDag = y + '-' + m + '-' + d;
    model.sleepQuestions.defaultValue[0] = iDag;
}

function storeSleepRecord() {
    calculateSleepTime();

    for (let i = 0; i < Object.values(model.sleepQuestions.actualValue).length; i++) {
      if (model.sleepQuestions.actualValue[i] == '') {      
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
        model.sleepQuestions.actualValue[3] = sleepTotal,
      ];
    recordCount++;
    // console.log(Object.values(database.sleepRecords)[6]);
    statisticsView(); 
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
    sleepTotalMsg = totalHour.toString() + ' timer og ' + totalMin.toString() + ' min';
    sleepTotal = totalHour + ':' + totalMin;
    // console.log(sleepTotal);
  }

function editMode(n) {
    // n = n.id;
    model.sleepQuestions.actualValue = ['', '', ''];
    model.buttonControl.buttonOn = false;
    statisticsView()
    // console.log(n)
    for (let i = 0; i < Object.values(model.sleepQuestions.actualValue).length; i++) {
      model.sleepQuestions.actualValue[i] = Object.values(database.sleepRecords[n])[i];
      // console.log(model.sleepQuestions.actualValue[i]);
    }

    for (let i = 0; i < Object.keys(database.sleepRecords).length; i++) {
      editHtml = `
                  <td><input class="inputField2" type="date" value="${Object.values(database.sleepRecords[n])[0]}"
                    oninput="model.sleepQuestions.actualValue[0] = this.value"/>
                  </td>
                  <td><input type="time" value="${Object.values(database.sleepRecords[n])[1]}"
                    oninput="model.sleepQuestions.actualValue[1] = this.value"/>
                  </td>
                  <td><input type="time" value="${Object.values(database.sleepRecords[n])[2]}"
                    oninput="model.sleepQuestions.actualValue[2] = this.value"/>
                  </td>
                  <td>${Object.values(database.sleepRecords[n])[3]}
                  </td>
                  <td><button id="${n}" class="button2" onclick="saveMode(this.id)">&#128190</button>
                  </td>
                  <td><button class="button2" disabled>⌫</button>
                  </td>
                  `;
    }

    let riktigRad = n;
    let editRow = document.getElementById(riktigRad); 
    editRow.innerHTML = editHtml;    

    
  }

function saveMode(n) {
  model.buttonControl.buttonOn = true;
    console.log(n)

    if (model.sleepQuestions.actualValue[0].split('-')[0].length != 4) {    
      model.sleepQuestions.actualValue[0] = false;
      return;
    }
    if (model.sleepQuestions.actualValue[0].split('-')[1] > 12) {    
      model.sleepQuestions.actualValue[0] = false;
      return;
    }

    // console.log(model.sleepQuestions.actualValue)
    database.sleepRecords[n][0] = model.sleepQuestions.actualValue[0].slice();
    database.sleepRecords[n][1] = model.sleepQuestions.actualValue[1].slice();
    database.sleepRecords[n][2] = model.sleepQuestions.actualValue[2].slice();
    
    calculateSleepTime()
    database.sleepRecords[n][3] = sleepTotal.slice();
 
    statisticsView();
    // console.log(model.sleepQuestions.actualValue)
  }

function deleteKey(n) {
  delete database.sleepRecords[n];
  statisticsView();
  }

  
function sortTable(n) { // sortere tabell funksjon fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_desc
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
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
