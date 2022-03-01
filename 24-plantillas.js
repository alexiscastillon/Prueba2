'use strict'
var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tus apellidos")

var texto = "Mi nombre es "+nombre+" "+ "y mis apellidos son: "+" "+ apellido;

document.write(texto)

//otra forma de hacer esto:
var texto = `
<h1> Hola que tal </h1>
<h3>Mis apellidos son ${apellido}</h3>


`;
//El signo de dolar $ + {} lo que hacemos es interpolar la variable que creamos imprimir mostrarla en pantalla
