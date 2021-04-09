      //view
      let html = '';

      function mainView() {
        html = '';
        html += `<div id="headline">Sleepy Time XXX</div>
                <div class="navBar">
                <div class="navButtons" onclick="showRegisterPage()">Registrer Søvn</div>
                <div class="navButtons" onclick="showStatisticsPage()">Søvn statistikk</div>
                </div>`;

        document.getElementById('page').innerHTML = html;
    }

    function registerSleepView() {
        model.sleepQuestions.actualValue = model.sleepQuestions.defaultValue;
        html += `<div class="field1"><table>`;
        for (let i = 0; i < Object.keys(model.sleepQuestions.questions).length; i++) {
            html += `<tr>
                     <td>${Object.values(model.sleepQuestions.questions)[i]}</td>
                     <td><input id="input${i}" class="inputField"
                     type="${Object.values(model.sleepQuestions.answerFields)[i]}"
                     value="${Object.values(model.sleepQuestions.defaultValue)[i]}"
                     oninput="model.sleepQuestions.actualValue[${i}] = this.value" />
                     </td>
                     <td>${Object.values(model.sleepQuestions.alertFields)[i]}</td>
                     </tr>`;
                            }
                            html += `</table>
                                        <div class="statusMsg">${model.statusMessages.current}</div>`;
                            html += `<button onclick="storeSleepRecord()">Registrer Søvn</button>
                            </div>`;
                            document.getElementById('page').innerHTML = html;
                        }

    function statisticsView() {
        html += `<div class="field2"><table>`;        
        html += `<tr>`;
        
        for (let i = 0; i < (Object.values(database.sleepRecords)[0]).length; i++) {
            html += `<td onclick="sortTable(${i})">${Object.values(database.sleepRecords)[0][i]}</td>
        `};
        html += `<td>Rediger</td><td>Slett</td>`    
        
        html += `</tr></table>
                <div class="field3"><table id="sleepTable">`;

        // let j = 0;

    
     
        for (let i = 1; i < Object.keys(database.sleepRecords).length; i++) {
            html += `<tr id=rad${i}>
                    <td>${Object.values(database.sleepRecords)[i][0]}</td>
                    <td>${Object.values(database.sleepRecords)[i][1]}</td>
                    <td>${Object.values(database.sleepRecords)[i][2]}</td>
                    <td>${Object.values(database.sleepRecords)[i][3]}</td>
                    <td><button class="button2" onclick="editMode(${i})">&#128393</button></td>
                    <td><button class="button2" onclick="deleteKey(${i})">⌫</button></td>                 
                    </tr>`;  
                };    
            
        html += `</table></div></div>`;
        document.getElementById('page').innerHTML = html;
        sortTable(0);       

        }
                        // onchange="model.sleepQuery. = this.value" />