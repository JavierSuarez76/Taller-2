// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:


let numero1 = Number = prompt("primer número:");
let numero2 = Number =  prompt("segundo número:");
let primerNumero = Math.min(numero1, numero2);
let segundoNumero = Math.max(numero1, numero2);


    for (let i = numero1; i <= numero2; i++) {
        console.log(i);
    }
