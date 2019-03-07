/*
La API Fetch no es nativa de NodeJs, pero podemos usar una libreria externa que la emula
  0) Instalar Nodejs
  1) Ejecutar en esta misma carpeta... npm install node-fetch
  2) Ejecutar node app.js
*/
const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(res => res.json())
.then(data => data.forEach(user=>console.log(user.name)));
