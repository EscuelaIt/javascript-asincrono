/*
  Obtener los resultados de TV Maze sobre Batman y guardar los resultados en un archivo
*/

const fetch = require("node-fetch");
const fs = require("fs");

const url = "http://api.tvmaze.com/search/shows?q=batman";

const obtenerDatos = async () => {
  const respuesta = await fetch(url);
  const listado = await respuesta.json();
  return listado;
}

//Atencion! la funcion fs.writeFile NO implementa promesas, pero puedo envolverla en una usando
// el constructor new Promise()
const guardarEnArchivo = (datos) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("datos.txt", datos, 'utf-8', (err)=>{
      if(err)
        reject("Error al guardar!");
      else
        resolve("Datos guardados!");
    });
  });
}

//Primera opcion promesas directamente
/*
obtenerDatos()
.then(listado=>guardarEnArchivo(listado))
.then(resp=>console.log(resp))
.catch(err=>console.log(err));
*/

//Segunda opción reutilizar la promesa con Async/Await
//Async/Await
(async ()=>{
  const listado = await obtenerDatos();
  const respuesta = await guardarEnArchivo(listado);
  console.log(respuesta);
})()
