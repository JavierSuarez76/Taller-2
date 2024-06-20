//Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo


let numero = Number = prompt("Ingrese un numero:");
let rango = [];

    for (let i = 0; i <= numero; i++) {
        rango.push(i);}

    if (rango.length >= 2) {
        rango.splice(1, 1); 
    } else {
        console.log("error"); /// profe no me sale el error cuando digito el 1//
    }
        console.log(numero);
   
