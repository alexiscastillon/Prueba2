'use strict'
//DOM - document object model

var caja = document.getElementById("mi caja").innerHTML//busca los ID "mi caja" y "innerhtml" saca el codigo html y lo muestra

var caja = document.querySelector("#micaja"); // hace lo mismo que el getelementbyID solo que lo seleccionamos por clase id o selectores CSS

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!" //Modifico el html y le pongo ese nuevo texto

caja.style.background = "blue";//modifica el color de fondo
caja.style.padding = "20px"; //modifica los bordes internos
caja.style.color = "green"; // modifica el color de letra
caja.ClassName = "HOLA"; // modifica el nombre de la clase de HTML

console.log(caja)

//Conseguir los elementos por su etiqueta

var todoslosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todoslosDivs[2].textContent //Accedo al indice 2 y con el "textcontent" muestro el contenido del texto 

contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
//modificamos lo que habia en el interior del div

///
