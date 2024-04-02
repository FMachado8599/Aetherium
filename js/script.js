let nombreCliente = prompt('Bienvenido/a! Ingrese su nombre');

let eleccion

alert(
    "Muchas gracias por usar Aetherium, " + 
    nombreCliente + "!" + 
    "\n \nPresiona 'Aceptar' para empezar a armar tu proxima PC");
//------PRODUCTOS-------//
const productos = [
    {nombre:'intel' , precio: 450, categoria:'procesador'},
    {nombre:'amd' , precio: 490, categoria:'procesador'},
    {nombre:'nvidia' , precio: 450, categoria:'tarjetaDeVideo'},
    {nombre:'amd' , precio: 440, categoria:'tarjetaDeVideo'},
    {nombre:'16' , precio: 50, categoria:'tarjetaRam'},
    {nombre:'32' , precio: 80, categoria:'tarjetaRam'}
]
const carrito = [

]

//FUNCION COMPONENTES//
function eleccionPrecio(respuesta, precio1, precio2){
    if (respuesta ==1){
        return precio1;
    } else{
        return precio2;
    }
}
do{
eleccion = prompt('Elije tu proximo procesador:\n\nIntel\no\nAMD\n\nEscribe una de las opciones').toLowerCase();
if (eleccion == "x"){
    break
}else{
}
}while(eleccion!="intel" && eleccion!="amd");
let productoElegido = productos.find((prod) => prod.nombre == eleccion && prod.categoria == 'procesador');
let sumaCarrito = carrito.push(productoElegido);

do{
eleccion = prompt('Ahora tu tarjeta Grafica:\n\nNvidia\no\nAMD\n\nEscribe una de las opciones').toLowerCase();
if (eleccion == "x"){
    break
}else{
}
}while(eleccion!="nvidia" && eleccion!="amd");
productoElegido = productos.find((prod) => prod.nombre == eleccion && prod.categoria == 'tarjetaDeVideo');
sumaCarrito = carrito.push(productoElegido);

do{
eleccion = prompt('Cuantos GB quieres de RAM:\n\n16 o 32\n\nEscribe una de las opciones').toLowerCase();
if (eleccion == "x"){
    break
}else{
}
}while(eleccion!="16" && eleccion!="32");
productoElegido = productos.find((prod) => prod.nombre == eleccion && prod.categoria == 'tarjetaRam');
sumaCarrito = carrito.push(productoElegido);

let totalCarrito = 0;
carrito.forEach((producto)=>{
    totalCarrito = totalCarrito + producto.precio
});



alert("Felicidades " + nombreCliente + ", tu pc esta lista, estas son sus caracteristicas:" +
    "\n" +
    "\nProcesador: " + carrito[0].precio +  " USD" +
    "\nGrafica: " + carrito[1].precio +   " USD" +
    "\nRAM: " + carrito[2].precio +   " USD" +
    "\n" +
    "\nTOTAL: " + totalCarrito + " USD");

