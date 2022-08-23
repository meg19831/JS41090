let pelicula = prompt ("Buscar pelicula: ");

/* do {
    (pelicula = "capitan america")|| (pelicula== "advengers")|| (pelicula== "el señor de los anillos");
}  */

while (pelicula != "ESC") {
    
switch (pelicula) {
    
    case "capitan america":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    case "advengers":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    case "el señor de los anillos":
        alert ("La pelicula " + pelicula + " esta lista para proyectase")
        break;
    default:
        alert("Esa pelicula aun no esta disponible")
        break;
}
    pelicula = prompt ("Que pelicula te  gustaria que ingresemos: ");
    alert ("Pronto podras disfrutar " + pelicula );
    break;
}

