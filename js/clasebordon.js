const { json } = require("stream/consumers");

const productos = [
    {id:1, nombre: 'cepillo para baño', desc: "Cepillo masajeador para perros que arrastra cualquier suciedad de tu mascota", precio: 450, img: './productos/cepillo para baño.jpg'},
    {id:2, nombre: 'manopla para baño', desc: "Manopla para usar en baño o simplemente para peinar a tu peludo", precio: 500, img: './productos/manopla para baño.jpg'},
    {id:3, nombre: 'garrapaticida', desc: "Protegé a tu mascota de las garrapatas con este producto ideal", precio: 300, img: './productos/garrapaticida.jpg'},
    {id:4, nombre: 'cepillo para perros', desc: "Cepillo que desenrieda y saca todos esos nudos molestos de tu perro", precio: 560, img: './productos/peine2.jpg'},
    {id:5, nombre: 'shampoo para gatos', desc: "Shampoo con una delicada y exquisita fragancia para los michis", precio: 400, img: './productos/shampoo para gato.jpg'},
    {id:6, nombre: 'cepillo para gato', desc: "Cepillo para tu minino que quitará todos esos indeseados pelos viejos", precio: 450, img: './productos/peine para gato.png'},
    {id:7, nombre: 'perfumes', desc: "Perfumes con distintas fragancias y para todos los gustos para tu peludo", precio: 300, img: './productos/perfumes.jpg'},
    {id:8, nombre: 'antiparasitario', desc: "Antiparasitario para gatitos esencial en sus primeros meses", precio: 280, img: 'productos/antiparasotario para gatos.jpg'},
]


const contenedorProductos = document.getElementById('container');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contador-carrito')

const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
} )



botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})



productos.forEach((productos) => {
    const container = document.createElement('container')
    container.classList.add('productos')
    container.innerHTML = `
    <h3>${productos.nombre}</h3>
    <p>${productos.desc}</p>
    <p class="precioProducto">Precio:$ ${productos.precio}</p>
    <button id="agregar${productos.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
contenedorProductos.appendChild(container)

const boton = document.getElementById('agregar${productos.id}')

boton.addEventListener('click', () => {
    agregarAlCarrito(productos.id)
})

})


const agregarAlCarrito = (prodId) => {
const existe = carrito.some (prod => prod.id === prodId)

if (existe){
    const prod = carrito.map(prod => {
        if(prod.id === prodId){
            prod.cantidad++
        }
    })
}else {
    const item = productos.find ((prod) => prod.id === prodId)
    carrito.push(item)

    console.log(carrito)
}
}
actualizarCarrito()



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)
    actualizarCarrito()
}





const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""


    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
contadorCarrito.innerText = carrito.length
precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)



}



