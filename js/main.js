//saludo al usuario
let nombre;
nombre = prompt("Hola cual es tu nombre");

const saludar = (nombre) => {
    alert("Bienvenido " + nombre + " el dolar cotiza 1250 pesos argentinos");
}
saludar(nombre);

const historial = [];
//Calcular cantidad de pesos a dolares
const calcular = (cantidad) => {
    alert("Tendrias en total " + (cantidad / 1250).toFixed(2) + " dolares");
    agregaHistorial(historial, cantidad);
}
let cantidad;
cantidad = parseFloat(prompt("Ingrese la cantidad de pesos a calcular"));
calcular(cantidad);

//Pregunta por si el usuario desea calcular otra cantidad
let elegir;
elegir = parseInt(prompt("¿Deseas realizar otra operacion?\n1.Si\n2.No"));
if (elegir == 1) {
    while (elegir == 1) {
        cantidad = parseFloat(prompt("Ingrese la cantidad de pesos a calcular"));
        calcular(cantidad);
        elegir = parseInt(prompt("¿Deseas realizar otra operacion?\n1.Si\n2.No"));
    }
}

//historial de las cantidades ingresadas por el usuario;
function agregaHistorial(array, agregar) {
    array.push(agregar);
}
console.log(historial);
function porCadaUno(array, funcion) {
    for (const element of historial) {
        funcion(element);
    }
}
porCadaUno(historial,console.log);
