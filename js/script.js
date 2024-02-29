let nombreCliente = prompt('Bienvenido/a! Ingrese su nombre');

let eleccion

alert(
    "Muchas gracias por usar Aetherium, " + 
    nombreCliente + "!" + 
    "\n \nPresiona 'Aceptar' para empezar a armar tu proxima PC");
//------PRODUCTOS-------//
let procesadorIntel = 290;
let procesadorAMD = 300;
//-------------//
let graficaNvidia = 500;
let graficaAMD = 490;
//-------------//
let ram16 = 50;
let ram32 = 80;

//FUNCION COMPONENTES//
function decision(respuesta, precio1, precio2){
    if (respuesta ==1){
        return precio1;
    } else{
        return precio2;
    }
}

do{
eleccion = prompt('Procesador:\n1: Intel\n2: AMD');
}while(eleccion!="1" && eleccion!="2");
let precioProcesador = decision(eleccion, procesadorIntel, procesadorAMD);

do{
eleccion = prompt('Tarjeta Grafica:\n1: Nvidia\n2: AMD');
}while(eleccion!="1" && eleccion!="2");
let precioGrafica = decision(eleccion, graficaNvidia, graficaAMD);

do{
eleccion = prompt('RAM:\n1: 16 GB\n2: 32 GB');
}while(eleccion!="1" && eleccion!="2");
let precioRAM = decision(eleccion, ram16, ram32);

let total = precioProcesador + precioGrafica + precioRAM;

alert("Felicidades " + nombreCliente + ", ya elegiste tus componentes:" +
    "\n" +
    "\nProcesador: "+ precioProcesador + " USD" +
    "\nGrafica: " + precioGrafica + " USD" +
    "\nRAM: " + precioRAM + " USD" +
    "\n" +
    "\nTOTAL: " + total + " USD");

