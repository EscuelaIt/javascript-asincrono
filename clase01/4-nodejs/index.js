/*
  Ejemplo de asincronismo en JS utilizando el runtime de Nodejs
  1) Descargar desde https://nodejs.org/es/
  2) ejecutar node index.js
*/
const fs = require('fs');

//Async
fs.readFile('archivo.txt', 'utf-8', (err, dato)=>{
  if(err){
    console.log("Error", err);
    return;
  }
  console.log("Datos:", dato);
});

//Sync
const contenido = fs.readFileSync('archivo.txt', 'utf-8');
console.log('Mostrar contenido SYNC', contenido);
