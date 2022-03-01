'use strict'
//transformacion de textos
var numero = 444;
var texto1 = "bienvenido al curso de Javascript de Alexis Castillon";
var texto2 = "es muy buen curso"

var dato = numero.toString //convertimos el numero en un string
dato = texto1.toUpperCase //Lo covertimos en mayuscula
dato = texto1.toLocaleLowerCase//Lo convertimos en miniscula 

console.log(dato)

//CALCULAR LONGITUD 

var nombre = "";
console.log(nombre.length)//esta propiedad cuenta las letras o cantidad de elementos

var busqueda = texto1.indexOf("curso");//con esta propiedad buscamos la palabra  que coincida

var busqueda = texto1.lastIndexOf("curso")// busca la ultima coincidencia

var busqueda = texto1.match("curso")//Me devuelve en un array con todos los resultados indice,index,etc

console.log(busqueda);





//CONCATENAR: unir textos 
var textoTotal = texto1 + " " + texto2; // es una forma de sumar los textos
var textoTotal = texto1.concat(" "+ texto2); // con este metodo hacemos lo mismo
