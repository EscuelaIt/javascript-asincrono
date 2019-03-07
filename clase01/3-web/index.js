//Asinc en la web
//Hoisting... var, function

//3 - Callbacks
const mostrarDato = () => {
  console.log("El usuario ingreso:", nombre.value);
}
//1 - DOM
const nombre = document.querySelector('input[name=nombre]');
//2 - Eventos
nombre.addEventListener("blur", mostrarDato);
