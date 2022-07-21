const productos = [
    {id:1, nombre: 'cepillo para baño', precio: 450},
    {id:2, nombre: 'manopla para baño', precio: 500},
    {id:3, nombre: 'garrapaticida', precio: 300},
    {id:4, nombre: 'cepillo para perros', precio: 560},
    {id:5, nombre: 'shampoo para gatos', precio: 400},
    {id:6, nombre: 'cepillo para gato', precio: 450},
    {id:7, nombre: 'perfumes', precio: 300},
    {id:8, nombre: 'antiparasitario', precio: 280},
]


for(const producto of productos) {
    let contenedor = document.getElementById('div-1');
    contenedor.innerHTML = ` <div id="div-1" class="row row-cols-1 row-cols-md-2 g-8">
                        <div class="col">
                            <div class="card">
                            <img src="productos/cepillo para baño.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Cepillo para perros</h5>
                            <p class="card-text">Cepillo masajeador para perros que arrastra cualquier suciedad de tu mascota</p>
                            <p>$450</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/manopla para baño.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Manopla</h5>
                            <p class="card-text">Manopla para usar en baño o simplemente para peinar a tu peludo</p>
                            <p>$500</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/garrapaticida.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Garrapaticida</h5>
                            <p class="card-text">Protegé a tu mascota de las garrapatas con este producto ideal</p>
                            <p>$300</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/peine2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Cepillo para perros</h5>
                            <p class="card-text">Cepillo que desenrieda y saca todos esos nudos molestos de tu perro</p>
                            <p>$560</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/shampoo para gato.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Shampoo para gatos</h5>
                            <p class="card-text">Shampoo con una delicada y exquisita fragancia para los michis</p>
                            <p>$400</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/peine para gato.png" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Cepillo para gato</h5>
                            <p class="card-text">Cepillo para tu minino que quitará todos esos indeseados pelos viejos</p>
                            <p>$450</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/perfumes.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Perfumes</h5>
                            <p class="card-text">Perfumes con distintas fragancias y para todos los gustos para tu peludo</p>
                            <p>$300 c/u</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                        <div class="col">
                            <div class="card">
                            <img src="productos/antiparasotario para gatos.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Antiparasitario</h5>
                            <p class="card-text">Antiparasotario para gatitos esencial en sus primeros meses</p>
                            <p>$280</p>
                            <button type="button" class="btn btn-info">Agregar al carrito</button>
                            </div>
                            </div>
                            </div>
                            </div>
    document.body.appendChild(contenedor);
} `;

