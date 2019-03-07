const resultados = document.querySelector("div#resultados");

const ajax = new XMLHttpRequest();
ajax.open("GET", "http://api.tvmaze.com/search/shows?q=batman");
ajax.addEventListener("load", ()=>{
  if(ajax.status !==200){
    console.error("Problemas!");
    return;
  }
  const serie = JSON.parse(ajax.responseText);
  serie.forEach(s=>{
    const img = document.createElement("img");
    img.src = s.show.image.medium;
    resultados.appendChild(img);
  });
});
ajax.send();
