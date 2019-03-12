/*
  Ejemplo integrador de asincronismo en NodeJS
  1) Obtener los datos sobre las series de Batman usando la API de TVMaze
  2) Guardar los datos en un archivo "series.batman.json"
  3) Obtener los datos sobre las series de Superman usando la API de TVMaze
  4) Guardar los datos en el archivo "series.superman.json"
  5) Cuando finalicen ambos procesos, leer los datos y ordenarlos cronologicamente
  6) Cada 1 seg. mostrar los titulos y fechas de emisión en pantalla
*/

const axios = require("axios");
const fs = require("fs");

///////////////////////////// Helpers
const getData = (url) => {
  return axios.get(url);
}

const saveFile = (name, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, data, 'utf-8', (err)=>{
      if(err)
        reject("Error saving", name);
      else
        resolve("Done! saving", name);
    });
  });
}

const getFile = (name) => {
  return new Promise((resolve, reject) => {
    fs.readFile(name, 'utf-8', (err, data)=>{
      if(err)
        reject("Error reading", name);
      else
        resolve(JSON.parse(data));
    });
  });

}

const sortData = (data) => {
  return data.sort((a,b)=>{
      return new Date(a.show.premiered) - new Date(b.show.premiered);
  })
}

const showData = (data) => {
  data.forEach((item,index)=>{
    setTimeout(()=>{
      console.log("Date:",item.show.premiered,"Name:",item.show.name)}
      ,1000*index);
  });
}

////////////////////////// App! Recordar, cuando uso await debo retornar una promesa
const tvMaze = "http://api.tvmaze.com/search/shows?q=";

(async ()=>{
  try{
    const batmanData = await getData(`${tvMaze}batman`);
    console.log("OK Batman TVMaze");
    const supermanData = await getData(`${tvMaze}superman`);
    console.log("OK Superman TVMaze");

    //Opcion Promise.all
    //const responses = await Promise.all([getData(`${tvMaze}batman`), getData(`${tvMaze}superman`)]);
    //await saveFile("series.batman.json", JSON.stringify(responses[0].data));
    //await saveFile("series.superman.json", JSON.stringify(responses[1].data));

    await saveFile("series.batman.json", JSON.stringify(batmanData.data));
    await saveFile("series.superman.json", JSON.stringify(supermanData.data));
    console.log("Guardar archivos");
    const fileBatman = await getFile("series.batman.json");
    const fileSuperman = await getFile("series.superman.json");
    console.log("Leer Archivos");
    const sortedData = sortData(fileBatman.concat(fileSuperman));
    showData(sortedData);
    console.log('//////////////////// Fin series APP');
  }catch(error){
    console.log("//////////////////// APP PROBLEMS", error);
  }
})();
