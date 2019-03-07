/*
    Obtener de una coleccion de posteos en un blog del usuario 1 especificamente el post numero 5.
    De ese post obtener los comentarios y mostrar los primeros 3.
    Este ejemplo nos permite analizar peticiones anidadas a un servicio web.
*/

/*
Atención! Este ejemplo viene con trampa...
Ejecutarlo en el navegador y analizar dónde está la falla...
Les dejo una pista, las peticiones asincronas si no se anidan, salen en paralelo
y se genera una "condición de carrera", la que llega primero gana.

La solución a este problema es el callback HELL! (futuro problema de mantenimiento)
*/

const urlPost = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let postId = 0;

const ajaxPost = new XMLHttpRequest();
ajaxPost.open("GET", urlPost);
ajaxPost.addEventListener("load", () => {
    const posts = JSON.parse(ajaxPost.responseText);
    const bingo = posts.filter(post=>post.userId===1 && post.id===5);
    console.log(bingo);
    postId = bingo[0].id;
})
ajaxPost.send();

const ajaxComentarios = new XMLHttpRequest();
ajaxComentarios.open("GET", urlComentarios + "?postId=" + postId);
ajaxComentarios.addEventListener("load", () => {
    const comentarios = JSON.parse(ajaxComentarios.responseText);
    console.log(comentarios.slice(0,3));
})
ajaxComentarios.send();
