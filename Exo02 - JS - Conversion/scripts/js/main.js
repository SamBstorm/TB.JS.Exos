let value = prompt("Veuillez indiquer la valeur à convertir :");
let base = prompt("Sur quel base numérique convertir ?");
base = parseInt(base);
let response = parseInt(value, base);
alert("La valeur "+ value +" sur base "+base+" est équivalant à "+response+ " sur base décimale.");


// alert(parseInt(prompt("Veuillez indiquer la valeur à convertir :"), parseInt(prompt("Sur quel base numérique convertir ?"))));