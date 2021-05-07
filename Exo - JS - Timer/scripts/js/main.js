// let timer = setTimeout(
//     function() {         // Que dois je effectuer ?

//     },
//     // Quand dois je le faire ?
// )

// let timer = setTimeout(
//     () =>         ,// Que dois je effectuer ?
//     // Quand dois je le faire ?
// )

// function maFonction(){

// }

// let timer = setTimeout(
//     maFonction,// Que dois je effectuer ?
//     // Quand dois je le faire ?
// )

window.onload = function(){
    const maFonction = function(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let finalFormat = `${hours}:${(minutes<10)?'0'+minutes:minutes}:${(seconds<10)?'0'+seconds:seconds}`;
        // let titre = document.head.getElementsByTagName("title")[0];
        // let titre = document.head.childNodes[3];
        let titre = document.querySelector("title");
        titre.innerText = finalFormat;
    };
    maFonction();
    // let timer = setTimeout(maFonction, 1000 );
    let timer = setInterval(maFonction, 1000 );
    //clearTimeout(timer);
};