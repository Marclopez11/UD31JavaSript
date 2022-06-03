let listadados = [];
for (let index = 0; index < 36000; index++) {
var dado1 = Math.floor(Math.random() * (7 - 1) + 1);
var dado2 = Math.floor(Math.random() * (7 - 1) + 1);

sumadados = dado1+dado2;
listadados.push(sumadados);

}

//console.log(dado1);
//console.log(dado2);
//console.log(sumadados);

console.log(listadados);
alert("Revisa El Console log");