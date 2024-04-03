// document.querySelectorAll()
let categoriaSeleccionada;

const productos = [
    {nombre:'intel' , id:'0101' , precio: 450, categoria:'cpu'},
    {nombre:'ryzen' , id:'0102' , precio: 490, categoria:'cpu'},
    {nombre:'nvidia' , id:'0201' , precio: 450, categoria:'gpu'},
    {nombre:'amd' , id:'0202' , precio: 440, categoria:'gpu'},
    {nombre:'asus' , id:'0301' , precio: 450, categoria:'motherboard'},
    {nombre:'gigabyte' , id:'0302' , precio: 440, categoria:'motherboard'},
    {nombre:'16' , id:'0401' , precio: 50, categoria:'ram'},
    {nombre:'32' , id:'0402' , precio: 80, categoria:'ram'},
    {nombre:'64' , id:'0403' , precio: 80, categoria:'ram'},
    {nombre:'evga' , id:'0501' , precio: 45, categoria:'psu'},
    {nombre:'seasonic' , id:'0502' , precio: 49, categoria:'psu'},
    {nombre:'asus' , id:'0601' , precio: 100, categoria:'cooler'},
    {nombre:'deepcool' , id:'0602' , precio: 80, categoria:'cooler'},
    {nombre:'corsair' , id:'0701' , precio: 180, categoria:'ssd'},
    {nombre:'western digital' , id:'0702' , precio: 90, categoria:'ssd'},
    {nombre:'corsair' , id:'0801' , precio: 150, categoria:'case'},
    {nombre:'thermaltake' , id:'0802' , precio: 150, categoria:'case'},
    {nombre:'lianli' , id:'0901' , precio: 12, categoria:'fan'},
    {nombre:'noctua' , id:'0902' , precio: 120, categoria:'fan'},
    {nombre:'zeus' , id:'1001' , precio: 300, categoria:'design'},
    {nombre:'thor' , id:'1002' , precio: 300, categoria:'design'}
]

let finalDecision = [];
const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
if(carritoStorage) {
    finalDecision = carritoStorage;
}
calcularSuma();
function calcularSuma(){
    const sumaTotal = document.getElementById('totalBuilder');
    let sumaProductos = 0;
        for (let i = 0; i < finalDecision.length; i++) {
        sumaProductos = sumaProductos + finalDecision[i].precio;
    };
    sumaTotal.innerHTML = 'Total: ' + sumaProductos;
    sumaTotal.style.display = 'flex';
}
function desmarcarActive(){
    const listaProductos = document.getElementById("objetos").childNodes
    if(listaProductos) {
    listaProductos.forEach( (prod) => {
        let child = document.getElementById(prod.id)
        if (child) {
        child.classList.remove("activeItem")
    }
    })
    }
}
function marcarActive(){
    if(categoriaSeleccionada){
    const productoElegido = finalDecision.find((prod) => prod.categoria == categoriaSeleccionada);
    desmarcarActive()
    if (productoElegido){
        document.getElementById(productoElegido.id).classList.add("activeItem");
        }
}

}



marcarActive();

function setItem(itemInput){
    const productSort = productos.find((prod) => prod.nombre == itemInput && prod.categoria == categoriaSeleccionada);
    const alreadyBought = finalDecision.find((prod) => prod.categoria == categoriaSeleccionada);
    if(alreadyBought){
        const index = finalDecision.indexOf(alreadyBought);
        finalDecision.splice(index,1);
        
    }
    finalDecision.push(productSort);

    calcularSuma()

    marcarActive();

    console.log(finalDecision);
};

function setCategoria(catInput){
    if(categoriaSeleccionada){
        document.querySelector("#" + categoriaSeleccionada).classList.remove("activeItem");
    }

    categoriaSeleccionada = catInput;
    document.querySelector('#' + catInput).classList.add("activeItem");
    const productosFiltrados = productos.filter((prod) => prod.categoria == catInput);
    const items = document.querySelector("#objetos");
    items.innerHTML = '';
    let thing;
    for (let i = 0; i < productosFiltrados.length; i++) {
        thing = document.createElement("li");
        thing.setAttribute('id', productosFiltrados[i].id)
        thing.innerHTML = productosFiltrados[i].nombre + ' $' + productosFiltrados[i].precio;
        thing.onclick = () => { setItem(productosFiltrados[i].nombre); }
        items.append(thing);
    };
    marcarActive();
};

function saveBuild(){
    // for (let i = 0; i < finalDecision.length; i++) {
    //     localStorage.setItem(finalDecision[i].categoria,finalDecision[i].nombre)
    // };
    localStorage.setItem("carrito",JSON.stringify(finalDecision));
    console.log(JSON.stringify(finalDecision))
}
function removeBuild(){
    while (finalDecision.length > 0) {
        finalDecision.pop();
    }
    localStorage.removeItem("carrito")
    desmarcarActive();
    calcularSuma()
}