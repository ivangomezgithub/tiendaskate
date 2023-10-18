import {productos,productosIniciales} from "./clases.js";

const guardarLocal = () => {
    
    localStorage.setItem("Carrito",JSON.stringify(arrayCarrito));
}

const arrayProductos = [];
productosIniciales (arrayProductos);

//arreglo carrito
const arrayCarrito = JSON.parse(localStorage.getItem("Carrito"));

let app = document.getElementById("app");


//funcion eliminar productos
const eliminarProducto = (id) => {

    //quitar del carito local storage
    //localStorage.removeItem(el.id);    
    const productoEncontrado = arrayCarrito.find ((el) => el.id === id);
    console.log(productoEncontrado);
    
    arrayCarrito = arrayCarrito.filter((carritoId) => {
        return carritoId !== productoEncontrado;
    });

};

function ProductosCarrito () {

    arrayCarrito.forEach ((el) => {

        let card = document.createElement("div");
        card.classList.add ("tarjetaProducto");

        card.innerHTML = `
        <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
        <h4>${el.id}</h4>
        <h3>${el.nombre}</h3>
        <p><b>PRECIO: ${el.precio}</b></p>
        </div>
        <button class="botonQuitar"><p>ELIMINAR DEL CARRITO</p></button>
        `;

        const buttonQuitar = card.querySelector(".botonQuitar");

       
        buttonQuitar.addEventListener("click",()=>{    
            //ELIMINAR PRODUCTO  

            
    localStorage.removeItem("Carrito",JSON.stringify(arrayCarrito));
        eliminarProducto(el.id);
        
        guardarLocal();

        console.log(arrayCarrito);

            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Quitaste este producto del Carrito',
                showConfirmButton: false,
                timer: 1000
              })
        })

        card.append(buttonQuitar);
        app.append(card);
    })

        //let cards = document.createElement("div");
        //.classList.add("card","container");

        //TOTAL PRECIO A PAGAR
   
}



const divTotal = document.getElementById("total");

const precioTotal = arrayCarrito.reduce((acc,el) => acc + el.precio, 0)
const totalComprado = document.createElement("div")
totalComprado.innerHTML=`<h4>TOTAL A PAGAR: ${precioTotal}</h4> `;
divTotal.append(totalComprado);

let resultado = 0;




const total = document.createElement("div");
total.innerHTML= `
<h4>TOTAL:</h4>
<h5>total+iva:</h5>
`

divTotal.append(total)

ProductosCarrito ();

console.log(arrayCarrito)