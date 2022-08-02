let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
bienvenido ();

// switch es igual al IF  pero mas dinamico // default = else 
let elijeTuProducto = parseInt(prompt(`Elija tu producto
1- Remera manga corta $3500
2- Pantalon corto $2000
3- Campera invierno $20000`));
switch (elijeTuProducto) {
    case 1 :
        alert(`Elegiste Remera manga corta`)
        
        break;
    case 2 : 
        alert ("Elegiste pantalon corto")
        break;

        case 3 : 
        alert ("Elegiste  campera invierno")
        break;

    default:
        alert ("Ingrese un caracter valido - Solo numeros")
        break;
}
  
function bienvenido() {
   
  
    console.log("Bienvenido ${nombre} ${apellido}" )}   //back ticks  alt + 96 // Resume  +  " " + 
    // ("Bienvenido " + " " + var+ " " + apellido )