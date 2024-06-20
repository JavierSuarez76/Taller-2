//Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

let frase = prompt("Ingresar la frase:");
let cuenta = 0;

while (cuenta < 10) {
    console.log(frase);
    cuenta++;
}