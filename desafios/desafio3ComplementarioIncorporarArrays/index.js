/* Ingreso al sistema, solicitud de registro, con datos personales.
Luego se solicitara que el correo sea uno válido */ 

alert ("Bienvenido a NetMovie. Para continuar es necesario completar el registro");
    
    function saludar(){

    alert (`Bienvenido ${nombre} ${apellido} \nSu correo electrónico es: ${correoElectronico}\n Alias:  ${alias}`);

} 

    let nombre = prompt ("Ingrese su  nombre")
    let apellido = prompt ("Ingrese su apellido");
    let correoElectronico = prompt ("Ingrese su correo electónico");
    let alias = prompt ("Ingrese un nombre para su perfil");
    
    saludar();
    
    class Usuario {
        constructor (nombre, apellido, correoElectronico, contraseña, alias){
            this.nombre = nombre;
            this.apellido = apellido;
            this.correoElectronico = correoElectronico;
            this.contraseña = contraseña;
            this.alias = alias; 
        }
        mostrarInfoUsuario (){
            return `Usuario : ¡Bienvenido a NetMovie  ${nombre} ! Tu correo electronico ${correoElectronico} ya se encuentra registrado y tu alias ${alias} tambien`
        }
        comprar (){
            return calcularPrecioProducto ()
        }
        pagarPeliculas (precio){
            alert ( `pagaste ${precio}`)
        }
    }
    const usuario = new Usuario(nombre, apellido, correoElectronico, alias)
    usuario.mostrarInfoUsuario ()
   

/* A continuación se mostrará el menu, para ver las peliculas dispobibles, para comprar y pagar.*/


    const peliculas = '1 - Capitan America \n2 - Advengers\n3 - El señor de los anillos\n4 - Jhon Wick \n5 - SnowPiercer \n6 - La presa \n7 - La huerfana  \n8 - Proyecto X \n9 - Encerrada  \n10 - Codigo emperador  \n 11 - She Will';
    let listaPeliculas = '';
    let total = 0;


    function mostrarMenu() {
        let opcion;
    
        do {
            opcion = prompt('Ingrese una opción:\n1 - Ver peliculas disponibles\n2 - Comprar\n3 - Finalizar');
            switch (opcion) {
                case '1':
                    verPeliculas();                
                    break;
                case '2':
                    comprar();
                    break;
                case '3':
                    pagarPeliculas();
                    break;
                default:
                    alert('Opción incorrecta');
                    break;
            }
        } while(opcion != 3);
    }
    mostrarMenu ();

    /* Se muestra por pantalla el listado de peliculas disponibles. Según el número elegido, por pantalla muestra si está disponible. Si ingresa un numero de pelicula  que no está, , arroja mensaje de no disponible y regresa al menú.  Al finalizar, se le propone al usuario si quiere ingresar alguna pelicula que no esté en la App */
    
    let pelicula = ""

function verPeliculas () { 

let  pelicula = [prompt (`Elija una pelicula para ver: 

1: Capitan America
2: Advengers
3: El señor de los anillos
4: Jhon Wick
5: SnowPiercer
6: La presa
7: La huerfana 
8: Proyecto X
9: Encerrada 
10: Codigo emperador 
11: She Will
`)];

pelicula.push ( );

/* 

    
        pelicula = prompt ("¿Qué película te  gustaria que ingresemos a nuestra App? ");
        alert (`Pronto podras disfrutar: ${pelicula} `);
        break;
    }*/
} 

// agregando arreglos [] a la APP
class TodasLasPeliculas {
    constructor (nombre, genero, duracion, idioma,anio, precio){
        this.nombre=nombre;
        this.genero=genero;
        this.duracion= duracion;
        this.idioma=idioma;
        this.año=anio;
        this.precio=precio;
    }
    mostrarTodasLasPeliculas (){
        const peliculasSuspenso = pelicula.filter ((pelicula.genero == "suspenso"));
        return peliculasSuspenso.genero;
        
    }
}

/* const peliculasDeSuspenso = [`Elija una pelicula para ver: 

    1:SnowPiercer
    2:La presa
    3:La huerfana 
    4:Proyecto X
    5:Encerrada 
    6:Codigo emperador 
    7:She Will `
]

let peliculasSuspenso = peliculas.filter((pelicula) => pelicula.genero == "suspenso"); */

const listaDePeliculas = [
    {id: 1, producto: "Capitan america", genero: "accion", duracion:"2:04:00", idioma:"ingles",anio:"2011", precio:1500 },
    {id: 2, producto:"Advenger", genero:"accion", duracion:"2:23:00",idioma:"ingles", anio:"2012", precio:1500 },
    {id:3, producto:"El señor de los anillos", genero: "aventura", duracion:"2:59:00", idioma: "ingles",anio:2005, precio: 1100 },
    {id:4, producto:"Jhon Wick",genero: "suspenso", duracion: "1:41:00",idioma: "ingles", anio:"2014", precio:1200},
    {id:5, producto:"SnowPiercer", genero:"accion",duracion: "00:50:00", idioma:"ingles",anio: "2020" , precio:1200},
    {id:6, producto:"La presa", genero:"suspenso",duracion: "01: 40:00",idioma: "ingles", anio:"2022" , precio:1200},
    {id:7, producto:"La huerfana",genero: "suspenso",duracion: "01:39:00",idioma: "ingles",anio:"2022" , precio:1200},
    {id:8, producto:"Proyecto X",genero: "suspenso",duracion: "01:45:00",idioma: "ingles",anio: "2022" , precio:1200},
    {id:8, producto:"Proyecto X",genero: "suspenso",duracion: "01:45:00",idioma: "ingles",anio: "2022" , precio:1200},
    {id:9, producto:"Encerrada", genero:"suspenso",duracion: "01:29:00",idioma: "ingles", anio:"2022" , precio:1200},
    {id:10, producto:"Codigo emperador",genero: "accion",duracion: "01:46:00",idioma:"ingles",anio:"2022", precio:1200},
    {id:11, producto:"She Will",genero: "suspenso",duracion: "01:45:00",idioma: "ingles",anio: "2022", precio:1200},
];

const resultado = listaDePeliculas.filter((el) => el.genero.includes('suspenso'));


/*Función  para realizar la compra de la pelicula, segun el número elegido. Permite comprar una sola o se puede seguir sumando titulos. */

function comprar() {
    const peliculaElegida = prompt('¿Qué pelicula desea comprar? (Ingrese el número)\n' + peliculas);
    switch (peliculaElegida) {
        case '1':
            listaPeliculas = listaPeliculas + 'Capitan America\n'
            total = total + 1500;
            break;
        case '2':
            listaPeliculas = listaPeliculas + 'Advengers\n'
            total = total + 1500;
            break;
        case '3':
            listaPeliculas = listaPeliculas + 'El señor de los anillos\n'
            total = total + 1100;
            break;
        case '4':
            listaPeliculas = listaPeliculas + 'Jhon Wick\n'
            total = total + 1200;
            break;
        case '5':
            listaPeliculas = listaPeliculas + 'SnowPiercer\n'
            total = total + 1200;
            break;        
        case '6':
            listaPeliculas = listaPeliculas + 'La presa\n'
            total = total + 1200;
            break;
        case '7':
            listaPeliculas = listaPeliculas + 'La huerfana\n'
            total = total + 1200;
            break;
        case '8':
            listaPeliculas = listaPeliculas + 'Proyecto X\n'
            total = total + 1200;
                break;
        case '9':
            listaPeliculas = listaPeliculas + 'Encerrada \n'
            total = total + 1200;
                break;
        case '10':
            listaPeliculas = listaPeliculas + 'Codigo emperador\n'
            total = total + 1200;
                break;
        case '11':
            listaPeliculas = listaPeliculas + 'She Will\n'
            total = total + 1200;
                break;                
    }
    alert('Producto agregado');
}

/* Esta funcion  permite calcular el precio de la pelicula */


function calcularPrecioProducto () {
    switch (pelicula.length) {
        case "1":
            return 1500;
            
            break;
        case "2":
                return 1500;
                
                break;
        case "3":
            return 1100;
            
            break;
        case "4":
            return 1200;
            
            break;
        case "5":
            return 1200;
                
            break;
        case "6":
            return 1200;
                    
            break;
        case "7":
            return 1200;
            
            break;
        case "8":
            return 1200;
            
            break;
        case "9":
            return 1200;
            
            break;
        case "10":
            return 1200;
            
            break;
        case "11":
            return 1200;
            
            break;
        default: `Estas son las peliculas disponibles por ahora`;
            break;
    }
}



/* Si el usuario luego de elegir la pelicula o las peliculas, puede continuar comprando, o finalizar la compra. Tambien puede ingresar a la App para registrarse y finalizar sin comprar. Aparecerá un mensaje "gracias por su visita" */

    function pagarPeliculas( precio) {
        if (total == 0) {
            alert('Gracias por su visita')
        } else {
            alert('Los productos comprados son:\n' + listaPeliculas + "Total: $" + total);
            alert (`A la brevedad le llegara un email para que pueda disfrutar de su compra`);
        }
    }
    

    