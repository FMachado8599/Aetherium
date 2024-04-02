// document.querySelectorAll()
let categoriaSeleccionada;

const productos = [
    {nombre:'corei' , precio: 450, categoria:'cpu'},
    {nombre:'ryzen' , precio: 490, categoria:'cpu'},
    {nombre:'nvidia' , precio: 450, categoria:'gpu'},
    {nombre:'amd' , precio: 440, categoria:'gpu'},
    {nombre:'asus' , precio: 450, categoria:'motherboard'},
    {nombre:'gigabyte' , precio: 440, categoria:'motherboard'},
    {nombre:'16' , precio: 50, categoria:'ram'},
    {nombre:'32' , precio: 80, categoria:'ram'},
    {nombre:'64' , precio: 80, categoria:'ram'}
]
function setItem(itemInput){
    console.log(itemInput);
};
function setCategoria(catInput){
    categoriaSeleccionada = catInput;
    const productosFiltrados = productos.filter((prod) => prod.categoria == catInput);
    const items = document.querySelector("#objetos");
    items.innerHTML = '';
    let thing;
    for (let i = 0; i < productosFiltrados.length; i++) {
        thing = document.createElement("li");
        thing.innerHTML = productosFiltrados[i].nombre;
        thing.onclick = () => { setItem(productosFiltrados[i].nombre); }
        items.append(thing);
    };
};