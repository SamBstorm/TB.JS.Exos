window.onload = function(){
    let cpt = 0;
    const input = document.querySelector("input[type=text]");
    const ajouterElement = function(){
        cpt++;
        const li = document.createElement("li");
        const ul = document.querySelector("ul");
        if(input.value && input.value.trim()){
            ul.appendChild(li);
            li.innerText = input.value;
        }
        input.value = "";
        btn.setAttribute("disabled","true");
    };


    let btn = document.querySelector("input[type=button]");
    btn.setAttribute("disabled","true");
    btn.addEventListener("click", ajouterElement);

    input.addEventListener("keyup", function(){
        if(!(input.value && input.value.trim())){
            btn.setAttribute("disabled","true");
        }
        else{
            btn.removeAttribute("disabled");
        }
    })
};