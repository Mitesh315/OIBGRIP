let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let data = JSON.parse(this.responseText);
      let opinionOutput = "";
      let timelineOutput = "";

      for(let item of data.opinions){
        opinionOutput += `
            <div class="opinion-card">
            <div class="opinion-title">${item.title}</div>
            <div class="opinion-subtitle">${item.subtitle}</div>
               <img class="opinion-img" src="${item.image}" />
               <p class="opinion-desc">${item.description}</p>
            </div>
         `;
      }

      for(let item of data.timeline){
        timelineOutput += `
        <div class="timeline-card">
        <li><b>${item.year}</b> - ${item.desc}</li>
      </div>
        `;
      }
      document.querySelector("#opinion-section").innerHTML = opinionOutput;
      document.querySelector(".timeline-ul").innerHTML = timelineOutput;
   }
}