/*
Bienvenidos al curso de programación Asincrona con Javascript
Profesor: Mario Romero
github: maaroarg
twitter: maaroarg
linkedin: https://www.linkedin.com/in/mario-romero-arg/
*/

//ES5
/*var nombre = "Mario Romero";
var amigos = ["Ana", "Pepe", "Maria", "Tomas", "Marcelo"];

function amigosConM(arr){
  var arrSalida = [];
  arr.forEach(function(amigo){
    if(amigo[0]=="M"){
      arrSalida.push(amigo);
    }
  })
  return arrSalida;
}

var amigosM = amigosConM(amigos);
console.log("Amigos de " + nombre + ", cuyo nombre comienza con M ", amigosM);
*/

/////////////// ES6
const nombre = "Mario Romero";
const amigos = ["Ana", "Pepe", "Maria", "Tomas", "Marcelo"];
amigos.push("Mariana");

//Arrow function
const amigosConM = (arr) => {
  return arr.filter(item=>item[0]=="M");
}

//Template Strings
console.log(`Amigos de ${nombre} con M ${amigosConM(amigos)}`);
