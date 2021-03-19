      //view
     
      function mainView() {
        let html = '';
        html += `<div id="headline">Daglig Refleksjonslogg</div>`;
        for (let i = 0; i < Object.keys(user).length; i++) {
          html += `<div class="userInfo"><en>${Object.keys(user)[i]}: </div>`;
          html += `<div class="userData">${Object.values(user)[i]}</div>`;
        }

        for (let i = 0; i < Object.keys(logQuestions).length; i++) {
          html += `<div class="questions">${
            Object.values(logQuestions)[i]
          }</div>`;
          console.log('kake');
        }

        document.getElementById('page').innerHTML = html;
      }