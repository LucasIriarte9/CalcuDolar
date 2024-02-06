//saludo al usuario
let nombre;
nombre = prompt("Hola cual es tu nombre");

const saludar = (nombre) => {
    alert("Bienvenido " + nombre + " el dolar cotiza 1250 pesos argentinos");
}
saludar(nombre);

//Calcular cantidad de pesos a dolares
const calcular = (cantidad) => {
    alert("Tendrias en total " + cantidad / 1250 + " dolares");
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

