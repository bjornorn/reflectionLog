//view
let html = '';

function mainView() {
  html = '';
  html += `<div id="headline">Sleepy Time</div>
                <div class="navBar">
                <div class="navButtons" onclick="registerSleepView()">Registrer Søvn</div>
                <div class="navButtons" onclick="statisticsView()">Søvn statistikk</div>
                </div>`;

  document.getElementById('page').innerHTML = html;
}

function registerSleepView() {
  mainView();
  model.sleepQuestions.actualValue = model.sleepQuestions.defaultValue;
  html += `<div class="field1"><table>`;
  for (let i = 0; i < Object.keys(model.sleepQuestions.questions).length; i++) {
    html += `<tr>
                <td>${Object.values(model.sleepQuestions.questions)[i]}
                </td>
                <td><input id="input${i}" class="inputField"
                type="${Object.values(model.sleepQuestions.answerFields)[i]}"
                value="${Object.values(model.sleepQuestions.defaultValue)[i]}"
                oninput="model.sleepQuestions.actualValue[${i}] = this.value"/>
                </td>             
              </tr>`;
  }
  html += `</table><button onclick="storeSleepRecord()">Registrer Søvn</button></div>`;

  document.getElementById('page').innerHTML = html;
}

function statisticsView() {
  mainView();
  html += `<div class="field2"><table><tr>`;
  for (let i = 0; i < Object.values(database.sleepData.headers).length; i++) {
      html += `<td onclick="sortTable(${i})">${Object.values(database.sleepData.headers)[i]}</td>`;
  }
  html += `<td>Rediger</td><td>Slett</td></tr></table>`;
  let buttonOnIndex = model.buttonControl.buttonOn == true ? '' : 'disabled';
  html += `<div class="field3"><table id="sleepTable">`;
  for (let i = 0; i < Object.keys(database.sleepRecords).length; i++) {
      html += `<tr id="${Object.keys(database.sleepRecords)[i]}" class="rader">
                <td>${Object.values(database.sleepRecords)[i][0]}</td>
                <td>${Object.values(database.sleepRecords)[i][1]}</td>
                <td>${Object.values(database.sleepRecords)[i][2]}</td>
                <td>${Object.values(database.sleepRecords)[i][3]}</td>
                <td><button id="${Object.keys(database.sleepRecords)[i]}" 
                  class="button2" ${buttonOnIndex} onclick="editMode(this.id)">&#128393</button></td>
                <td><button id="${Object.keys(database.sleepRecords)[i]}" 
                  class="button2" ${buttonOnIndex} onclick="deleteKey(this.id)">⌫</button></td>                 
              </tr>`;
  }
  html += `</table></div></div>`;
  
  document.getElementById('page').innerHTML = html;
  sortTable(0);
}