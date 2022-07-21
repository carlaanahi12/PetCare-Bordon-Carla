class Producto {
    constructor (id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
mostrarProducto (){
    return "id:" +
    this.id + 
    "precio: " +
    this.precio + 
    "" +
    "producto: " +
    this.categoria +
    "\n";
}
}

function comprar (nombre,email,tel,productosEnCarro){
    let cant = productosEnCarro.reduce((acc, item)=> item.precio + acc, 0);
    alert (
        "Gracias" +
        nombre + 
        " por tu compra. \n Total: $" + cant);
}
    


let productos = [
new Producto(100, "cepillo de baño", 100, "productoparaMascotas"),
new Producto(101, "peine grande", 100, "productosparaMascotas"),
new Producto(102, "peine chico", 80, "productosparaMascotas"), 
new Producto(103, "peine para gatos", 105, "productosparaMascotas"), 
new Producto(104, "garrapaticida", 200, "productosparaMascotas"), 
new Producto(105, "manopla", 400, "productosparaMascotas"), 
new Producto(106, "perfumes", 450, "productosparaMascotas"), 
new Producto(107, "shampoo para gatos", 350, "productosparaMascotas"), 
new Producto(108, "shampoo para gatos", 300, "productosparaMascotas"), 
new Producto(110, "antiparasitario", 478, "productosparaMascotas"),
];

let nombres = ["cepillo de baño", "peine grande", "peine chico", "peine para gatos", "garrapaticida", "manopla", "perfumes", "shampoo para gatos", "shampoo para pelo blanco", "antiparasitario"];

let productosEnCarro = [];


let nombre = ""; 



while (nombre != "salir" && nombre != null) {
let aux = nombres.join(",");
nombre = prompt("ingrese nombre para comprar o ingrese salir: \n(" + 
aux + 
")"
);

if (nombre != "salir"){
let productosFiltradoPorNombre = productos.filter(
(item) => (item.nombre == nombre)
);


let cartel = "";
for (let i = 0; i < productosFiltradoPorNombre.length; ++i){
cartel +=
"id" +
productosFiltradoPorNombre[i].id + 
"precio" +
productosFiltradoPorNombre[i].precio + 
"" +
"producto: " +
productosFiltradoPorNombre[i].categoria +
"\n";
}



let idSeleccionado = parseInt(
prompt(
"seleccione id del producto que quiere comprar: \n\n" + cartel
)
);
let productoParaCarro = productosFiltradoPorNombre.find(
(item) => item.id == idSeleccionado
);
if (productoParaCarro) {
productosEnCarro.push(productoParaCarro);
}
}
}




if(productosEnCarro.length > 0) {
    alert("Ingrese sus datos para terminar su compra");
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su email");
    let tel = prompt("Ingrese su tel");
    comprar (nombre,email,tel,productosEnCarro);
}
