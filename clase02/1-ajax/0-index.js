/*
  Ajax es una API que se implementa en los navegadores que me permite realizar una petición
  asincrona a un servidor.
*/

//DOM
let datosGlobales;
const btn = document.querySelector("button");
const resultados = document.querySelector("div#resultados");
const combo = document.querySelector("select");

//Evento
btn.addEventListener("click", enviarDatos);
combo.addEventListener("change", ()=>{
  console.log("Dato!", combo.value);
});

//Callback
function enviarDatos(){
  //AJAX - Asyncro. JS And XML
  const ajax = new XMLHttpRequest();
  const metodo = 'GET';
  const url = 'https://jsonplaceholder.typicode.com/users';
  ajax.open(metodo, url);
  ajax.addEventListener("load", mostrarDatos);
  ajax.addEventListener("error", mostrarError);
  ajax.send();

  //Callback
  function mostrarDatos(){
    if(ajax.status !== 200 ){
      mostrarError();
      return;
    }
    const users = JSON.parse(ajax.responseText);
    datosGlobales = users;
    users.forEach((user)=>{
      const p = document.createElement("p");
      p.innerText = `Nombre: ${user.name} (${user.username})`;
      resultados.appendChild(p);

      //Options
      const option = document.createElement("option");
      option.innerText = `${user.name}`;
      combo.appendChild(option);
    });

  }

  function mostrarError(){
    console.error("PROBLEMAS!");
  }
}
