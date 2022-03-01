'use strict'

/*
1-Pida 6 numeros por pantalla y los meta en un array
2-Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola.
3-Ordernarlo y mostrarlo
4-Invertir su orden y mostrarlo 
5-Mostrar cuantos elementos tiene el array
6-Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos,textocustom = ""){
    document.write("<h1> Contenido del array </h1>");
    document.write("<ul>")
    elementos.forEach((elemento,index) => {
    document.write("<li>"+elemento+ "<li>");
    })
    document.write("</ul>")
}

//Pedir 6 numeros
var numeros = new Array(6);

for(let i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("introduce un numero",0));
}

//Mostrar en el cuerpo de la pagina 
mostrarArray(numeros)

//Mostrar el array por la consola
console.log(numeros);

//Ordenar y mostrar

numeros.sort();
console.log(numeros,'ordenado');

//Invertir y mostrar

numeros.reverse()
console.log(numeros,'invertido');

//Cuantos elementos tiene un array
document.write("<h1>El array tiene: "+ numeros.lenght +"elementos");


//Busqueda
var Busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == Busqueda);
document.write("<h1>ENCONTRADO </h1>")
document.write("<h1>Pocicion de la busqueda: "+pocision+"</h1>");


