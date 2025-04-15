class libro{
    nombre;
    stock;

    constructor(nom,sto){
        this.nombre = nom;
        this.stock = sto;
    }
    get nombre(){
        return this.nombre
    }
}

let productoEnVenta = [];

function nuevoLib(){
    
    let nombreProd = document.querySelector("#producto");
    let stockProd = document.querySelector("#stock");

    let nuevoLibro = new libro(nombreProd.value, stockProd.value);
    productoEnVenta.push(nuevoLibro);


    console.log(productoEnVenta);
    cargarProd();
}

function cargarProd() {
    let listaVenta = document.querySelector(".formu_listaProd");

    let plantillaVenta = ` <div class="input-field col s6">
                <input placeholder="Producto" id="producto" type="text"  value="${productoEnVenta[0].nombre}" disabled>
                <label for="producto"></label>
            </div>
            <div class="input-field col s3">
                <input placeholder="stock" id="stock" type="text" disabled value="${productoEnVenta[0].stock}">
                <label for="stock"></label>
            </div>
            <div class="col s3">
                <br>
                <a class="waves-effect waves-light btn">Agregar 1 a carrito</a>
            </div>`;
    listaVenta.innerHTML += plantillaVenta;
}

