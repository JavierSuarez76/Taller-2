// Crea un programa a partir de las siguientes instrucciones:
// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímel
const nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
const nuevoNombre = prompt("ingresar otro nombre:");

nombres.push(nuevoNombre);

const segundoNombre = prompt("ingresar nombre adicional:");

nombres[2] = segundoNombre;
    console.log(nombres)