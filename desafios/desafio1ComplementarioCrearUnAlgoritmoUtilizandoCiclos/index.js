let pelicula = prompt (`Elija una pelicula para ver: 

1: Capitan America
2: Advengers
3: El señor de los anillos
4: Jhon Wick
`);

while (pelicula != "ESC") {
    if (pelicula == "Capitan America"&& pelicula == "Advengers" && pelicula == "El señor de los anillos" && pelicula == "Jhon Wick" ) {
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
    }  

switch (pelicula) {
    
    case "1":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    case "2":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    case "3":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    case "4":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    default:
        alert("Esa pelicula aun no esta disponible")
        break;
}

    pelicula = prompt ("Que pelicula te  gustaria que ingresemos: ");
    alert ("Pronto podras disfrutar:  " + pelicula );
    break;
}



