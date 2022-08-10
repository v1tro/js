let nombre = prompt("Cual es tu nombre")
let apellido = prompt("Cual es tu apellido")
let bienvenido = (nombre, apellido) => alert(`Bienvenido ${nombre} ${apellido}`); // funcion flecha != hoisting function declarada

bienvenido(nombre, apellido);



// switch es igual al IF  pero mas dinamico // default = else 
let elijeTuProducto = parseInt(prompt(`Elija tu producto
1- Mochila1 $3500
2- mochila2 $2000
3- mochila3 $20000`));
switch (elijeTuProducto) {
    case 1:
        alert(`Elegiste Mochila1`)

        break;
    case 2:
        alert("Elegiste mochila2")
        break;

    case 3:
        alert("Elegiste  mochila3")
        break;

    default:
        alert("Ingrese un caracter valido - Solo numeros")
        break;
}

// // arreglos  // iterando arreglos =  recorrer el arreglo, posicionamiento, iteracion. 
// let listadoMochilas = ["mochila1", "mochila2", "mochila3"]
// // agrego un producto al array con braket notation
// listadoMochilas[3] = "mochila4"
// console.log(listadoMochilas[3]) // agrego un elemento al array mediante not notation 
// listadoMochilas.push("mochila5")
// console.log(listadoMochilas)


// loop for para imprimir por consola el listado entero de nuestro array, ej si queremos ver un array de 100 elementos. 
// for (let i = 0; i < listadoMochilas.length; i++) {
//     console.log(listadoMochilas[i])
// }

// los arreglos tienen metodos Push & pop  shift unshift 

// Objetos y funcion constructora 

function mochila (marca, precio, disponiblidad) {
    this.marca = marca;
    this.precio = precio;
    this.disponiblidad = disponiblidad;
}

let mochila1 = new mochila ("Nike",3500,true);
let mochila2 = new mochila ("Puma",4000,true);
let mochila3 = new mochila ("Adidas",3000,true);

let listadoDeMochilas = []
listadoDeMochilas.push (mochila1,mochila2,mochila3)