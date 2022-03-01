"use strict"

//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion

function calculadora(){
    //conjunto de instrucciones a ejecutar
    console.log("hola soy la calculadora")
    console.log("si soy yo")
//return "Hola soy la calculadora!!";

}


//Defino la funcion
function calculadora(numero1,numero2){
    console.log("Suma:"+" "+ (numero1+numero2));
    console.log("Resta:"+" "+ (numero1-numero2));
    console.log("Multiplicacion:"+" "+ (numero1*numero2));
    console.log("Division:"+" "+ (numero1/numero2));
    console.log("************************************")
}

//invocar o llamar a la funcion
for(var i = 1;i<=10;i++){
    console.log(i)
    calculadora(i,8)
}
