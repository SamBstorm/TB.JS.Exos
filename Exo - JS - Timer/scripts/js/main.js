

window.onload = function(){
    const body = document.body;
    const h1 = document.createElement("h1");
    body.appendChild(h1);

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
    getTimer("title");
    let title_timer = setInterval(
        function(){ getTimer("title"); }
        , 1000 );
    getTimer("body>h1")
    let body_timer = setInterval(
        function(){ getTimer("body>h1"); }
        , 1000 );
};