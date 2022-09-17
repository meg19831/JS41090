/* inventario de peliculas disponibles */

/* conectarlos a un carrito */

class Producto {
  constructor(id, titulo, genero, duracion, idioma, anio, precio, img) {
    this.id = id;
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.idioma = idioma;
    this.anio = anio;
    this.precio = precio;
    this.img = img;
  }
}

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  catalogoDePeliculas(listaDePeliculas);
  /* console.log("DOM") */
});

const listaDePeliculas = [
  new Producto(
    1,
    "Capitan america",
    "accion",
    "2:04:00",
    "ingles",
    "2011",
    1500,
    "assets/img/accion8.jpg"
  ),
  new Producto(
    2,
    "Advenger",
    "accion",
    "2:23:00",
    "ingles",
    "2012",
    1500,
    "assets/img/accion7.jpg"
  ),
  new Producto(
    3,
    "El señor de los anillos",
    "aventura",
    "2:59:00",
    "ingles",
    2005,
    1100,
    "assets/img/aventura7.jpg"
  ),
  new Producto(
    4,
    "Jhon Wick",
    "suspenso",
    "1:41:00",
    "ingles",
    "2014",
    1200,
    "assets/img/suspenso7.jpg"
  ),
  new Producto(
    5,
    "SnowPiercer",
    "accion",
    "00:50:00",
    "ingles",
    "2020",
    1200,
    "assets/img/accion4.jpg"
  ),
  new Producto(
    6,
    "La presa",
    "suspenso",
    "01: 40:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso1.jpg"
  ),
  new Producto(
    7,
    "La huerfana",
    "suspenso",
    "01:39:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso2.jpg"
  ),
  new Producto(
    8,
    "Proyecto X",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso3.jpg"
  ),
  new Producto(
    9,
    "Encerrada",
    "suspenso",
    "01:29:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso4.jpg"
  ),
  new Producto(
    10,
    "Codigo emperador",
    "accion",
    "01:46:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso5.jpg"
  ),
  new Producto(
    11,
    "She Will",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso6.jpg"
  ),
];

/* console.log(listaDePeliculas); */

/* crear una funcion para mostrar las peliculas */

function catalogoDePeliculas(productos) {
  const peliculasContainer = document.getElementById("peliculas-container");
  productos.forEach((producto) => {
    let cardPeli = document.createElement(`div`);
    cardPeli.classList.add(`col-md-4`);
    cardPeli.style = "width: 18rem";
    cardPeli.innerHTML += ` <div class = "card my-3">;
                                        <img src= "${producto.img}" class = "img-card-top" alt= "${producto.titulo}"> 
                                        <div class= "carPeli-body">
                                            <h5 class= "card-peli-titulo"> ${producto.titulo}</h5>
                                            <p class = "card-text">Precio: "${producto.precio}"</p>
                                            <p class = "card-text">Genero: "${producto.genero}"</p>
                                            <p class = "card-text">Anio: "${producto.anio}"</p>
                                            <p class = "card-text">Duracion "${producto.duracion}"</p> 
                                            <p class = "card-text">Idioma "${producto.idioma}"</p>
                                            <button role="boton" class="boton"><i class="fa-solid fa-play" id= "btn-add-${producto.id}">Agregar</button>
                                            <button role="boton" class="boton"><i class="fa-solid fa-play" id= "btn-del-${producto.id}">Eliminar</button> 
                                        </div>
                                    </div>`;

    peliculasContainer.appendChild(cardPeli);

  /*   const button = document.getElementById(`btn-add-${producto.id}`);
    button.addEventListener("click", () => {
      eliminarCarrito(`${producto.id}`);
      alert(`Agregaste la peli ${producto.titulo}`);
      carrito.push(producto);
    });
  });
} */

const button = document.getElementById(`btn-add-${producto.id}`);
button.addEventListener("click", () => {
  alert(`Agregaste la peli ${producto.titulo}`);
agregarCarrito(producto.id);
});
});
}


const buttonEliminar = document.getElementById(`btn-del-${producto.id}`);
buttonEliminar.addEventListener("click", () => {
  /* alert(`Eliminar peli agregada ${producto.titulo}`); */
carrito.splice();
});


//funcion agregar carrito

function agregarCarrito(x){
    let producto = listaDePeliculas.find ((e)=>
    e.id==x)
    carrito.push (producto)
    console.log(carrito);
}

//funcion eliminar carrito

/* function eliminarCarrito(id) {
  const producto = listaDePeliculas.find(function encontrarPelicula() {
    if (producto.id == id) {
      return producto;
    }
  });
  carrito.push(producto);
} */

