window.onload = function(){
    let cpt = 0;
    const ajouterElement = function(){
        cpt++;
        const li = document.createElement("li");
        const ul = document.querySelector("ul");
        const input = document.querySelector("input[type=text]");
        if(input.value && input.value.trim()){
            ul.appendChild(li);
            li.innerText = input.value;
        }
        input.value = "";
    };
    //Le code à exécuter une fois la fenêtre chargée doit se situer ICI.
    let btn = document.querySelector("input[type=button]");
    btn.addEventListener("click", ajouterElement);
};