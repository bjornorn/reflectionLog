      //view
      let html = '';

      function mainView() {
        html += `<div id="headline">Sleepy Time</div>
                <div class="navBar">
                <div class="navButtons">Registrer Søvn</div>
                <div class="navButtons">Søvn statistikk</div>
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
                                value="${Object.values(model.sleepQuestions.defaultValue)[i]}"
                                oninput="model.sleepQuestions.actualValue[${i}] = this.value" />
                                
                                
                                </td>
                                </tr>`;
                            }
                            html += `</table>`;
                            document.getElementById('page').innerHTML = html;
                        }
                        
                        // onchange="model.sleepQuery. = this.value" />