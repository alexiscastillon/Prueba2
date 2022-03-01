'use strict'
//ARRAYS MULTIDIMENSIONALES: son arrays dentro de otros arrays tienen 2 o mas dimensiones

var peliculas = ["fast and furius","el orfanato","scary movie"];
var categorias = ["terror","accion","suspenso"];

var cine = [peliculas,categorias];

console.log(cine[0][2]); // con el (0) entro a peliculas y con el 2 entro a (scary movie)
