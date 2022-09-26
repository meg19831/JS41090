/* inventario de peliculas disponibles */

/* conectarlos a un carrito */

class Producto {
  constructor(
    id,
    titulo,
    genero,
    duracion,
    idioma,
    anio,
    precio,
    img,
    cantidad
  ) {
    this.id = id;
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.idioma = idioma;
    this.anio = anio;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }
}

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  catalogoDePeliculas(listaDePeliculas);
  
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

document.addEventListener("click", (e) => {
  /* console.log(e.target); */
  if (e.target.matches(".btn-primary")) {
     agregarCarrito(e);
  }
  
});

//boton eliminar 
document.addEventListener("click", (e) => {
  
  if (e.target.matches(".btn-danger")) {
  /*  borrarItemCarrito(e); */
   eliminarDelCarrito(e)
  }
  verCarrito()
});

const eliminarDelCarrito = (e) =>{
  const item =carrito.find((producto)=>producto.id===e)
  const indice = carrito.indexOf(item)
  carrito.splice(indice,1)
}




/* crear una funcion para mostrar las peliculas */

function catalogoDePeliculas(productos) {
  const peliculasContainer = document.getElementById("peliculas-container");
  productos.forEach((producto) => {
    let cardPeli = document.createElement(`div`);
    cardPeli.classList.add(`col-md-4`);
    cardPeli.style = "width: 16rem";
    cardPeli.innerHTML += ` <div class = "card my-3">;
                                        <img src= "${producto.img}" class = "img-card-top" alt= "${producto.titulo}"> 
                                        <div class= "carPeli-body">
                                            <h5 class= "card-peli-titulo"> ${producto.titulo}</h5>
                                            <p class = "card-text">Precio: "${producto.precio}"</p>
                                            <p class = "card-text">Genero: "${producto.genero}"</p>
                                            <p class = "card-text">Anio: "${producto.anio}"</p>
                                            <p class = "card-text">Duracion: "${producto.duracion}"</p> 
                                            <p class = "card-text">Idioma: "${producto.idioma}"</p>
                                            
                                            <button data-id="${producto.id}" id="boton-agregar" class="btn btn-primary">Agregar</button>
                                            
                                        </div>
                                    </div>`;

    peliculasContainer.appendChild(cardPeli);
  });
}

//funcion para agregar productos en el carrito

function agregarCarrito(e) {
  
  const cardNumero = Number(e.target.dataset.id);
  const productoSeleccionado = listaDePeliculas.find(
    (i) => i.id === cardNumero
  );
  const coincidirCard = carrito.findIndex((i) => i.id === cardNumero);
 
  if (coincidirCard === -1) {
    carrito.push(
      new Producto(
        productoSeleccionado.id,
        productoSeleccionado.titulo,
        productoSeleccionado.genero,
        productoSeleccionado.duracion,
        productoSeleccionado.idioma,
        productoSeleccionado.anio,
        productoSeleccionado.precio,
        productoSeleccionado.img,
        (productoSeleccionado.cantidad = 1)
      )
    );
  } else {
    carrito[coincidirCard].cantidad++;
  }
  window.localStorage.setItem('carrito', JSON.stringify(carrito));
  verCarrito();
}

// funcion para ver carrito

function verCarrito() {
  
  const seccionCarrito = document.getElementById(`seccionCarrito`);
  seccionCarrito.textContent = "";
  carrito.forEach((i) => {
    const div = document.createElement(`div`);

    div.innerHTML += `<li class="list-group-item text-uppercase bg-dark text-white">
    <span class="badge bg-primary rounded-pill align-middle">${
      i.cantidad
    }</span>
  <span class="lead align-middle">${i.titulo}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
  <div>
      <p class="lead mb-0">Total: $<span>${i.cantidad * i.precio}</span></p>
  </div>
  <div>
      <button class="btn btn-sm btn-success" id= "btn-sumar" >Sumar</button>
      <button class="btn btn-sm btn-danger" id="btn-eliminar">Restar</button>
      <button type="button" class="btn btn-link" id = "btn-total">Total</button>
  </div> </li>`;

  
    seccionCarrito.appendChild(div);
  });
  
}

//Eliminar producto del carrito

function borrarItemCarrito(e) {
  
  const id = e.target.dataset.id;
 //borramos los productos
 carrito = carrito.filter((carritoId) => {
  return carritoId !== id;
});

 //volvemos a renderizar
  verCarrito();
}


//boton total

document.addEventListener("click", (e) => {
  
  if (e.target.matches(".btn-link")) {
  /*  totalCompras(e) */ alert("hola")
  }
  verCarrito()
});

/* function totalCompras() {
  
} */



//vaciar carrito

const botonVaciar = document.getElementById("btn-vaciarCarrito")
botonVaciar.classList.add (".btn-secondary") 
botonVaciar.addEventListener("click", (e) => {
   
   carrito.length=0
   verCarrito()
  });



//evento del boton enviar formulario


let idFormulario = document.getElementById("idFormulario")
idFormulario.addEventListener ("click", (e) =>{
 localStorage.setItem(`capturarFormulario`, JSON.stringify(idFormulario));
 localStorage.setItem(`capturarFormulario`,JSON.stringify(inputEmail.value))
})

  //capturar datos del Formulario
  
  function capturarFormulario() {

    let nombre=document.getElementById("inputNombre").value;
    let email=document.getElementById("inputEmail").value;
    let telefono=document.getElementById("inputTelefono").value;
    let mensaje=document.getElementById("exampleFormControlTextarea2").value;
    
    if (nombre == ""){
      alert("Nombre Obligatorio");
    document.getElementById("inputNombre").focus();
    } else {
    }if (email == "")  {
      alert("Email Obligatorio");
      document.getElementById("inputEmail").focus();
    } else {
    }if (telefono == "") {
        document.getElementById("inputTelefono").focus();
    } else {
    }if (mensaje == "") {
          document.getElementById("exampleFormControlTextarea2").focus();
          
    } else {
      
          document.getElementById("inputNombre").value = "";
          document.getElementById("inputEmail").value = "";
          document.getElementById("inputTelefono").value = "";
          document.getElementById("exampleFormControlTextarea2").value = "";
          document.getElementById("inputNombre").focus();
    }
    function capturarFormulario() {
      let idFormulario = localStorage.getItem(`idFormulario`,email);
    
      
    }
    capturarFormulario(); 
   alert ("Gracias por tu compra. Nos pondremos en contacto a través de tu correo electrónico.\n NetMovie")
  }
  