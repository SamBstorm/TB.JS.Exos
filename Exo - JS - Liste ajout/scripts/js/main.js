window.onload = function(){
    let cpt = 0;
    const ajouterElement = function(){
        cpt++;
        const li = document.createElement("li");
        const ul = document.querySelector("ul");
        ul.appendChild(li);
        li.innerText = `Item ${cpt} ${ul.childElementCount}`;
    };
    //Le code à exécuter une fois la fenêtre chargée doit se situer ICI.
    let btn = document.querySelector("input[type=button]");
    btn.addEventListener("click", ajouterElement);
};