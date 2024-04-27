let categoriaSeleccionada;

let productos = [];
fetch("./json/productos.json")
    .then( (resp) => resp.json() )
    .then( (data) => {
        data.forEach((post) => {
            productos.push(post);
        });
    })
    .catch((error) => {
        console.error("Error al cargar productos.", error);
    });

let finalDecision = [];
const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
if(carritoStorage) {
    finalDecision = carritoStorage;
};
calcularSuma();
function calcularSuma(){
    const sumaTotal = document.getElementById('totalBuilder');
    let sumaProductos = 0;
        for (let i = 0; i < finalDecision.length; i++) {
        sumaProductos = sumaProductos + finalDecision[i].precio;
    };
    sumaTotal.innerHTML = 'Total: ' + sumaProductos;
    sumaTotal.style.display = 'flex';
};
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
};
function marcarActive(){
    if(categoriaSeleccionada){
    const productoElegido = finalDecision.find((prod) => prod.categoria == categoriaSeleccionada);
    desmarcarActive()
    if (productoElegido){
        document.getElementById(productoElegido.id).classList.add("activeItem");
        }
};

};

function capitalize(str) {
    return str
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
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

    calcularSuma();

    marcarActive();
    

    const htmlCategoria = document.getElementById(categoriaSeleccionada);
    htmlCategoria.childNodes[3].innerHTML = capitalize(itemInput);

};

function setCategoria(catInput){
    categoriaSeleccionada && document.querySelector("#" + categoriaSeleccionada).classList.remove("activeItem")

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
    localStorage.setItem("carrito",JSON.stringify(finalDecision));
};
function removeBuild(){
    while (finalDecision.length > 0) {
        finalDecision.pop();
    }
    localStorage.removeItem("carrito")
    desmarcarActive();
    calcularSuma()

    let htmlLiCategoria = document.getElementsByClassName("componentType");   
    for (let i = 0; i < htmlLiCategoria.length; i++){
        htmlLiCategoria[i].childNodes[3].innerHTML = "";
    }

};

function finishedBuild(){
    removeBuild();
    Toastify({
        text: "Compra realizada",
        duration: 3000,
        close: true,
        stopOnFocus: true,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast();
    Swal.fire({
        title: 'Bought',
        text: 'Congratulations!',
        icon: 'success',
        confirmButtonText: 'Cool',
      })
}