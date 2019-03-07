/*
  Traer de Maze TV datos sobre Batman
*/

const url = "http://api.tvmaze.com/search/shows?q=batman";
const url404 = "https://jsonplaceholder.typicode.com/otroendpoint";

//DOM
const resultados = document.querySelector("div#resultados");
const subtitulo = document.querySelector("h2#subtitulo");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

//Ejemplo 1 - usando callbacks
btn1.addEventListener("click", () => {
  subtitulo.innerText = "Callbacks";

  const ajax = new XMLHttpRequest();
  ajax.open("GET", url);
  ajax.addEventListener("load", (e) => {
      if(e.target.status !== 200) {
        console.log("Error!", e.target.status);
        return;
      }
      armarListado(JSON.parse(ajax.responseText), resultados);
  });
  ajax.send();
});

//Ejemplo 2 - usando promesas
btn2.addEventListener("click", ()=>{
  subtitulo.innerText = "Promesas";

  fetch(url)
  .then(response => {
    if(response.status !== 200) throw new Error(response.status);
    return response.json()
  })
  .then(listado=>{
    armarListado(listado, resultados);
  }).catch(error=>{
    console.error("Error en promesas", error);
  })
});

//Ejemplo 3  - usando async / await
btn3.addEventListener("click", async ()=>{
  subtitulo.innerText = "Async/Await";

  //Primer forma de usar Async/Await con arrow function

  /*const getListado = async ()=>{
    const respuesta = await fetch(url);
    const listado = await respuesta.json();
    armarListado(listado, resultados);
  }
  getListado();
*/

  //Segunda forma, usando IIFE (Función anónima auto-ejecutada)

  /*(async ()=>{
    const respuesta = await fetch(url);
    const listado = await respuesta.json();
    armarListado(listado, resultados);
  })();
  */

  // Tercer forma, defino el callback del listener del botón como una funcion Async

  try{
    //recordar declarar el callback con async
    const respuesta = await fetch(url);
    if(respuesta.status !== 200) throw new Error(respuesta.status);
    const listado = await respuesta.json();
    armarListado(listado, resultados);
  }catch(error){
    console.error("Problemas en Async", error);
  }

});

///////////////////////// Helpers ///////////////////////////

/*
* armarListado
* Recibe un listado de objetos y el contendor donde ubicarlo en el DOM
*/

function armarListado(listado, contenedor){
  contenedor.innerText = "";
  listado.forEach(item=>{
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3><a href="${item.show.url}">${item.show.name}</a></h3>
      <img src="${item.show.image.original}" style="width:50%"/>
      <div>${item.show.summary}</div>
    `;
    contenedor.appendChild(div);
  });
}
