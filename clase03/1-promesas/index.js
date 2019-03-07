/*
  Una promesa es un objeto con 3 posibles estados:
  - pendiente
  - resuelta
  - rechazada

  Y tiene la particularidad de que se puede "encadenar"

  Es ideal para que nuestro código asincrono quede legible y mantenible
*/

////////////////////////////////// Constructor de Promesas.
/*
Permite transformar cualquier funcion basada en callbacks a promesas!
*/
const getUsuarios = new Promise((resolve, reject)=>{
  let ajax = new XMLHttpRequest();
  ajax.open("GET","https://jsonplaceholder.typicode.com/users");
  ajax.addEventListener("load",()=>{
    resolve(ajax.responseText);
  });
  ajax.addEventListener("error",(e)=>{
    reject(e);
  });
  ajax.send();
});

getUsuarios
.then((data)=>{
  console.log("Promesa",data);
})
.catch((data)=>{
  console.error("Error",data);
});

//////////////////////////// Fetch. API nativa para hacer request mas sencillos
/*fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  console.log("fetch",response.status);
  return response.json();
})
.then(usuarios=>{
  return fetch("https://jsonplaceholder.typicode.com/posts?userId="+usuarios[0].id);
})
.then(response=>{
  return response.json();
})
.then(posts=>{
  return fetch("https://jsonplaceholder.typicode.com/comments?postId="+posts[0].id);
})
.then(response=>{
  return response.json();
})
.then(comments=>{
  console.log("Finalmente", comments);
})
.catch(error=>{
  console.error("ERROR!", error);
});*/
