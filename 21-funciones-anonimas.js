'use strict'
//funciones anonimas : es una funcion que no tiene nombre y lo podemos 
//guardar dentro de una variable,se utiliza para hacer callbacks
//Call Backs: es una funcion que se ejecuta dentro de otra

function sumame(numero1,numero2,sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar)
    sumaPorDos(sumar)
    
    return sumar
}

sumame(5,7,function(dato){
    console.log("La suma es" ,dato);
},
function (dato){
    console.log("La suma por 2 es:" , (dato*2));
});