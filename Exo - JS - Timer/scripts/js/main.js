

window.onload = function(){
    const body = document.body;
    const h1_date = document.createElement("h1");
    h1_date.setAttribute("id","date");
    const h1_clock = document.createElement("h1");
    h1_clock.setAttribute("id","clock");
    body.appendChild(h1_date);
    body.appendChild(h1_clock);

    const getTimer = function(cssSelector){
        let elemHTML = document.querySelector(cssSelector);
        if(elemHTML){
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let finalFormat = `${hours}:${(minutes<10)?'0'+minutes:minutes}:${(seconds<10)?'0'+seconds:seconds}`;        
            elemHTML.innerText = finalFormat;
        }
    };
    
    const getDate = function (cssSelector) {
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Août", "Septembre", "Octobre","Novembre", "Décembre"];
        const dayNames = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];        
        let elemHTML = document.querySelector(cssSelector);
        if (elemHTML){
            let date = new Date();
            let dayOfWeek = date.getDay();
            let month = date.getMonth();
            let dayOfMonth = date.getDate();
            let finalFormat = `${dayNames[dayOfWeek]} ${dayOfMonth} ${monthNames[month]}`;
            elemHTML.innerText = finalFormat;
        }
    }
    getTimer("title");
    let title_timer = setInterval(
        function(){ getTimer("title"); }
        , 1000 );
    getTimer("#clock");
    let body_timer = setInterval(
        function(){ getTimer("#clock"); }
        , 1000 );
    getDate("#date");

    const millisecondPerDay = 86400000;
    let date = new Date();
    let ms = date.getMilliseconds() + (date.getSeconds()*1000) + (date.getMinutes()*60000) + (date.getHours() * 3600000);
    let date_timer = setTimeout(
        function(){
            getDate("#date");
            let t = setInterval(
                getDate("#date"),
                millisecondPerDay
            )
        }
        ,millisecondPerDay - ms
    );
};