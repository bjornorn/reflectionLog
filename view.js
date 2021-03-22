      //view
      let html = '';

      function mainView() {
        html = '';
        html += `<div id="headline">Sleepy Time</div>
                <div class="navBar">
                <div class="navButtons" onclick="showRegisterPage()">Registrer Søvn</div>
                <div class="navButtons" onclick="showStatisticsPage()">Søvn statistikk</div>
                </div>`;

        document.getElementById('page').innerHTML = html;
    }

    function registerSleepView() {
        html += `<table>`;
        for (let i = 0; i < Object.keys(model.sleepQuestions.questions).length; i++) {
            html += `<tr>
                     <td>${Object.values(model.sleepQuestions.questions)[i]}</td>
                     <td><input id="input${i}" class="inputField"
                     type="${Object.values(model.sleepQuestions.answerFields)[i]}"
                     value="${Object.values(model.sleepQuestions.actualValue)[i]}"
                     oninput="model.sleepQuestions.actualValue[${i}] = this.value" />
                     </td>
                     <td>${Object.values(model.sleepQuestions.alertFields)[i]}</td>
                     </tr>`;
                            }
                            html += `</table>`;
                    html += `<button onclick="alertFieldMessage()">Registrer Søvn</button>`;
                            document.getElementById('page').innerHTML = html;
                        }

    function statisticsView() {
        html += `<table>`;        
        html += `<tr>`;
        
        for (let i = 0; i < Object.values(model.sleepRecords)[0].length; i++) {
            html += `<td>${Object.values(model.sleepRecords)[0][i]}</td>`    
        };
        
        html += `</tr>`;

        let j = 0;
        for (let i = 1; i < Object.keys(model.sleepRecords).length; i++) {
            html += `<tr>
                    <td>${Object.values(model.sleepRecords)[i][0]}</td>
                    <td>${Object.values(model.sleepRecords)[i][1]}</td>
                    <td>${Object.values(model.sleepRecords)[i][2]}</td>
                    <td>${Object.values(model.sleepRecords)[i][3]}</td>
                    </tr>`;  
                };    
            
        html += `</table>`;
        document.getElementById('page').innerHTML = html;

        }
                        // onchange="model.sleepQuery. = this.value" />