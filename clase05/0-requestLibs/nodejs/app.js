//Usar diferentes modulos para trabajar con peticiones asincronas en NODEJS
//npm install request axios node-fetch

/////////////////// Requires
const http = require("http"); //API nativa
const https = require("https"); //Atención, https se implementa en otro modulo nativo
const request = require("request");
const fetch = require("node-fetch");
const axios = require("axios");

/////////////////// URL
const url = "https://jsonplaceholder.typicode.com/users";

////////////////// Modulos en acción!
/////////1 - http/https
/*https.get(url, (res) => {
  const { statusCode } = res;

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { //Evento de recepcion de datos
    //console.info("Chunk",chunk);
    rawData += chunk;
  });

  res.on('end', () => { //Evento de fin de envio de datos
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Error!: ${e.message}`);
});
*/

/////////2 - Request. Usa callbacks pero hay variantes para que acepte promesas
/*request(url, (error, response, body)=>{
    if(error){
      console.error("Upss!");
      return;
    }
    //console.log(response);
    console.log(JSON.parse(body));
})*/

/////////3 - Fetch, ya lo conocen usa promesas de forma nativa
/*fetch(url)
.then(response=>response.json())
.then(usuarios=>console.log("Fetch", usuarios));
*/

/////////4 - Axios. Utiliza promesas y funciona tanto en web como en nodejs!
// Conversion a JSON automatica y control de errores de status HTTP
/*
axios.get(url)
.then(response=>{
  const {status, body} = response;
  console.log(status, body);
}).catch(err=>console.error("Axios Error!", err.response.status));
*/

//version Async con el problema de try/catch
/*try{
  (async ()=>{
    const response = await axios.get(url);
    console.log("Axios Async!", response.body);
  })()
}catch(err){
  console.log("Error! Catch", err.response.status)
}*/

//version Async final. El bloque try/catch debe estar dentro del modulo
//Al estar fuera, por estar fuera del scope, no puede capturar el error
(async ()=>{
  try{
    const response = await axios.get(url);
    console.log("Axios Async!", response.body);
  }catch(err){
    console.log("Error! Catch", err.response.status)
  }
})()
