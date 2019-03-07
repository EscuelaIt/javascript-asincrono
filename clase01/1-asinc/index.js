//Prueba de pensamiento asincrono...
//Podes predecir el orden de ejecución?
console.log("Paso 1");

setTimeout(()=>{
  console.log("Paso 2");
}, 2000);

setTimeout(()=>{
  console.log("Paso 3");
},0);

console.log("Paso 4");
