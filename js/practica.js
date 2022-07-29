let productos = [];

let = id;
let = nombre;
let = precio;
let = cantidad;


class Producto {
    constructor (id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;

    }
}

function inicializarElementos() {
    container = document.getElementById("container");
    nombre = document.getElementById("nombre");
    precio = document.getElementById("precio");
    //console.log (container, nombre, precio)
}
inicializarElementos()




let container = document.getElementById ("container");
container.onsubmit = (event) => {
    event.preventDefault();
    console.log ("nombre, precio");
}

