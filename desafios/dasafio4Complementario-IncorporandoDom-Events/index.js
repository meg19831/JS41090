
    
/* inventario de peliculas disponibles */

/* conectarlos a un carrito */

class Producto {
    constructor(id, titulo, genero, duracion, idioma, anio, precio, img) {
        this.id = id
        this.titulo = titulo
        this.genero = genero
        this.duracion = duracion 
        this.idioma = idioma
        this.anio = anio
        this.precio = precio
        this.img = img
    }
}

let carrito = new Array();

const listaDePeliculas = [
    new Producto ( 1,  "Capitan america",  "accion", "2:04:00", "ingles","2011", 1500, "asset/img/accion8.jpg"),
    new Producto ( 2, "Advenger", "accion", "2:23:00","ingles", "2012", 1500, "assets/img/accion7.jpg" ),
    new Producto (3, "El señor de los anillos",  "aventura", "2:59:00", "ingles",2005, 1100, "assets/img/aventura7.jpg"  ),
    new Producto (4, "Jhon Wick", "suspenso",  "1:41:00","ingles", "2014", 1200, "assets/img/suspenso7.jpg" ),
    new Producto (5, "SnowPiercer", "accion", "00:50:00", "ingles", "2020" , 1200, "assets/img/suspenso8.jpg" ),
    new Producto (6, "La presa", "suspenso", "01: 40:00", "ingles", "2022" , 1200, "assets/img/suspenso1.jpg" ),
    new Producto (7, "La huerfana", "suspenso", "01:39:00", "ingles","2022" , 1200, "assets/img/suspenso2.jpg" ),
    new Producto (8, "Proyecto X","suspenso","01:45:00", "ingles","2022" , 1200, "assets/img/suspenso3.jpg" ),
    new Producto (9, "Encerrada", "suspenso","01:29:00", "ingles", "2022" , 1200, "assets/img/suspenso4.jpg" ),
    new Producto (10, "Codigo emperador", "accion","01:46:00","ingles","2022", 1200, "assets/img/suspenso5.jpg" ),
    new Producto (11, "She Will", "suspenso", "01:45:00", "ingles","2022", 1200, "assets/img/suspenso6.jpg" )

];

document.addEventListener('DOMContentLoaded',() => {
    catalogoDePeliculas(listaDePeliculas);
    /* console.log("DOM") */;
})
    /* console.log(listaDePeliculas); */

    /* crear una funcion para mostrar las peliculas */


    function catalogoDePeliculas (productos) {
        const peliculasContainer = document.getElementById ("peliculas-container");
        productos.forEach(producto => {
            let cardPeli = document.createElement (`div`);
            cardPeli.innerHTML +=` <div class= "cardPeli" style widht: 18 rem>;
                                        <img assets = "${producto.img}" class = "img-card-top" alt= "${producto.nombre}"> 
                                        <div class= "carPeli-body">
                                            <h5 class= "card-peli-titulo"> ${producto.titulo}</h5>
                                            <p class = "card-text">Precio: "${producto.precio}"</p>
                                            <p class = "card-text">Genero: "${producto.genero}"</p>
                                            <p class = "card-text">Genero: "${producto.anio}"</p>
                                            <p class = "card-text">Duracion "${producto.duracion}"</p> 
                                            <p class = "card-text">Idioma "${producto.idioma}"</p>
                                            <button role="boton" class="boton"><i class="fa-solid fa-play" id= "btn-add-${producto.id}">Agregar</button>
                                            <button role="boton" class="boton"><i class="fa-solid fa-play" id= "btn-del-${producto.id}">Eliminar</button> 
                                        </div>
                                    </div>`

        peliculasContainer.appendChild (cardPeli);

        });
    }


        /* const button = document.getElementById (`${producto.id}`);
        button.addEventListener ("click", ()=> {
            carrito (`${producto.id}`);
            alert (`Agregaste la peli ${producto.titulo}`)
            })
        }); */


       /*  const button = document.getElementById ( `${producto.id}`);
        button.addEventListener ("click", ()=> {
            listaDePeliculas (`${producto.id}`);
            alert (`Eliminaste la peli ${producto.titulo}`)
        }) */
        
    
    


