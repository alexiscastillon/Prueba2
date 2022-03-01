'use strict'
//parametros rest y spread
function listadoDeFrutas(fruta1,fruta2,...todas){
    console.log("frutas 1: ",fruta1)
    console.log("frutas 2: ",fruta2)
    console.log(todas)

}
listadoDeFrutas("Naranja", "Manzana", "Sandia", "Pera" , "Melon" , "coco");
 var frutas = ["Naranja", "Manzana"];
 listadoDeFrutas(...frutas, "Sandia", "Pera" , "Melon" , "coco");

//REST:Lo que hace los parametros REST con los 3  puntos ... capturan todos los parametros restantes y los guarda en un array

// SPREAD:Pasamos la variable que creamos (frutas) y interpreta que Naranja es (fruta1) y manzana es (fruta2) siguen el orden que tiene los parametros en la funcion principal