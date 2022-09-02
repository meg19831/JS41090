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
            this.nombre = nombre
            this.apellido = apellido
            this.correoElectronico = correoElectronico
            this.contraseña = contraseña
            this.alias = alias
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
    const usuario = new Usuario 
    mostrarInfoUsuario ()
   

/* A continuación se mostrará el menu, para ver las peliculas dispobibles, para comprar y pagar.*/


    const peliculas = '1 - Capitan America \n2 - Advengers\n3 - El señor de los anillos\n4 - Jhon Wick';
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

let pelicula = prompt (`Elija una pelicula para ver: 

1: Capitan America
2: Advengers
3: El señor de los anillos
4: Jhon Wick
`);


while (pelicula != "ESC") {
    if (pelicula == "Capitan America"&& pelicula == "Advengers" && pelicula == "El señor de los anillos" && pelicula == "Jhon Wick" ) {
        alert ("La pelicula " + pelicula + " esta lista disponible")
    }  
    
    switch (pelicula) {
    
        case "1":
            alert ("La pelicula " + pelicula + " esta disponible")
            break;
        case "2":
            alert ("La pelicula " + pelicula + " esta lista disponible")
            break;
        case "3":
            alert ("La pelicula " + pelicula + " esta lista disponible")
            break;
        case "4":
            alert ("La pelicula " + pelicula + " esta lista disponible")
            break;
        default:
            alert("Esa pelicula aun no esta disponible")
            break;
    }
    
        pelicula = prompt ("¿Qué película te  gustaria que ingresemos a nuestra App? ");
        alert (`Pronto podras disfrutar: ${pelicula} `);
        break;
    }
}

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
    }
    alert('Producto agregado');
}

/* Esta funcion  permite calcular el precio de la pelicula */


function calcularPrecioProducto () {
    switch (pelicula) {
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
        }
    }
    

    mostrarMenu()