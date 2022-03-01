'use strict'

//ARRAYS : arreglos,matrices
//Coleccion de datos,culquier tipo de valor : booleanos,strings,numeros

var nombre = "Alexis Castillon";
var nombre = ["alexis", "castillon", 23, false]; //arrays simples corchetes

var lenguajes = new Array("PHP", "JavaScript",);//otra forma de hacer arrays

console.log(nombre[2])//Estamos accediendo al array en la posicion 2

//----------------------------------------------------------------------//

//LONGITUD DE UN ARRAY//

var elemento = parseInt(prompt("Que elemento del array quieres", 0));
alert(nombre[elemento]);

if (elemento >= 6) {
    alert("Introduce el numero correcto menor que " + nombre.length);
} else {
    alert("El usuario seleccionado es " + nombre[elemento]);
}

//---------------------------------------------------------------------//

//RECORRER UN ARRAY COMPLETO (for)


document.write("<h1>Lenguajes de programacion del 2022 </h1>");
document.write("<ul>")
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li> " + lenguajes[i] + "</li>");

}

document.write("</ul>");

//-------------------------------------------------------------------//
// FOR.EACH: otra manera de recorrer los arrays

lenguajes.forEach(elemento, indice, array) =>{ // recibe esos parametros
    document.write("<li>" + elemento + "</li>");
}

document.write("</ul>");

//---------------------------------------------------------------------//

//FOR IN:RECORRE EL ARRAY

for(let lenguaje in lenguajes){ //recorro cada lenguaje de los "lenguajes"
document.write("<li>"+lenguaje[lenguaje]+"</li>"); //[lenguaje] es indice 0
}

//---------------------------------------------------------------------//

//METODOS DE ARRAYS

.pop() => //saca el ultimo elemento
.push() => //agrega un elemento
.indexOf() => // busca un elemento en el indice
.splice() => // nos permite borrar a partir de un indice 
.join() => // convierte un array en un string este metodo se guarda dentro de una variable

//-------------------------------------------------------------------//

//CONVERTIR TEXTO STRINGS("") A ARRAYS[]
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //este metodo convierte en array todo lo que esta separado en coma y espacio(, )

//-------------------------------------------------------------------//

//ORDENAR ARRAYS 
.sort()// nos permite ordenar el array en orden alfabetico por default.
var peliculas = ["conjuro", "spiderman","wolverine"];
peliculas.sort();

console.log(peliculas)


//-----------------------------------------------------------------------//

//BUSQUEDA EN EL ARRAY

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});
console.log(busqueda);

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP" );
//Este metodo es el mismo solo que simplicado con el callback y la comparacion

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP" );
//Nos permite sacar el indice de lo que estamos buscando
//--------------------------------------------------------------------//

//METODO SOME()

var busqueda = precios.some(precio => precio > 80);
//este metodo busca si en (precios) hay un valor mayor a 80 y nos retorna
//true o false dependiendo el caso
