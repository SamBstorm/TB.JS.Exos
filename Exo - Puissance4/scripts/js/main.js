const NB_ROW = parseInt(prompt("Combien de lignes?"));
const NB_CELL = parseInt(prompt("Combien de cellules?"));
const SIZE = 64;
const SPACING = 5;

const start = function(){
    let t = document.createElement("table");
    let tbody = document.createElement("tbody");
    tbody.id = "grid";
    document.body.appendChild(t);
    t.appendChild(tbody);
    t.style.backgroundColor="blue";
    t.style.borderSpacing = SPACING + "px";
    for (let r = 0; r < NB_ROW; r++) {
        let row = document.createElement("tr");
        tbody.appendChild(row);
        for (let c = 0; c < NB_CELL; c++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
            cell.style.backgroundColor = "white";
            cell.style.borderRadius = "50%";
            cell.style.minHeight = SIZE +"px";      
            cell.style.minWidth = SIZE +"px";
        }        
    }

    t.style.height = (NB_ROW * SIZE)+((NB_ROW+2)*SPACING)+"px";
}

window.onload = start;