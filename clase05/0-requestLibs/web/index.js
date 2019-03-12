//Comunicacion Asincrona con JQuery, la conversion a JSON viene de regalo :)
const url = "https://jsonplaceholder.typicode.com/users";

$(document).ready(function(){
  /*$.ajax({
    url: url,
    method: "GET",
    success: function(resp){console.log(resp)},
    error: function(err){console.error(err)}
  })*/
  $.get(url, function(resp){
    console.log("GET", resp);
  });
})
