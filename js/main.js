alert ("Bienvenidos a nuestra tienda")
let carrito = 0
const peineGatos = 300
const peinePerros = 300
const shampooPerros = 250
const shampooGatos = 250
const perfumes = 80
const garrapaticida = 150
const antiparasitario = 100
let cantpeineGatos
let cantpeinePerros
let cantshampooPerros
let cantshampooGatos
let cantPerfumes
let cantGarrapaticida
let cantAntiparasitario



function sumar () {
    for (let i = 1; i <= 8 ; i++) {
        let ingreso = parseInt(prompt("sumar: \n 1-peineGatos \n 2-peinePerros \n 3-shampooPerros \n 4-shampooGatos \n 5-perfumes \n 6-garrapaticida \n 7-antiparasitario \n Salir"))
        if (ingreso == 1){
            cantpeineGatos = parseInt(prompt("ingrese cantidad de peines para gatos"))
            carrito = cantpeineGatos * peineGatos
        }else if (ingreso == 2){
            cantpeinePerros = parseInt(prompt("ingrese cantidad de peines para perros"))
            carrito = cantpeinePerros * peinePerros
        }else if (ingreso == 3){
            cantshampooPerros = parseInt(prompt("ingrese cantidad de shampoos para perros"))
            carrito = cantshampooPerros * shampooPerros
        }else if (ingreso == 4){
            cantshampooGatos = parseInt(prompt("ingrese cantidad de shampoos para gatos"))
            carrito = cantshampooGatos * shampooGatos
        }else if (ingreso == 5){
            cantPerfumes = parseInt(prompt("ingrese cantidad de perfumes"))
            carrito = cantPerfumes * perfumes
        }else if (ingreso == 6){
            cantGarrapaticida = parseInt(prompt("ingrese cantidad de garrapaticidas"))
            carrito = cantGarrapaticida * garrapaticida
        }else if (ingreso == 7){
            cantAntiparasitario = parseInt(prompt("ingrese cantidad de antiparasitarios"))
            carrito = cantAntiparasitario * antiparasitario
        }else if (ingreso == 8){
            console.log(`El total de la compra es: ${carrito} \n peineGatos: ${cantpeineGatos} \n peinePerros: ${shampooPerros} \n shampooPerros: ${cantshampooPerros} \n shampooGatos: ${cantshampooGatos} \n perfumes: ${cantPerfumes} \n garrapaticida: ${cantGarrapaticida} \n antiparasitario: ${cantAntiparasitario}`)
            break
        }
    }
}