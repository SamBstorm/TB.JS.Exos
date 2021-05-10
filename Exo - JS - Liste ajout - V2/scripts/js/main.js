window.onload = function(){
    const title = document.createElement("h3")
    title.innerText = "Liste : ";
    document.body.appendChild(title);

    const btn = document.createElement("input");
    title.appendChild(btn);
    btn.setAttribute("type","button");
    btn.setAttribute("value","+");

    const ul = document.createElement("ul");
    document.body.appendChild(ul);


    let cpt = 0;
    const ajouterElement = function(){
        cpt++;
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = `Item ${cpt} ${ul.childElementCount}`;
    };
    //Le code à exécuter une fois la fenêtre chargée doit se situer ICI.
    btn.addEventListener("click", ajouterElement);
};