import {productos,productosIniciales} from "./clases.js";


const arrayProductos = [];
productosIniciales (arrayProductos);

const carrito = JSON.parse(localStorage.getItem("Carrito"));

let app = document.getElementById("app");

const arrayCarrito= [];

function ProductosCarrito () {

    carrito.forEach ((el) => {

        let card = document.createElement("div");
        card.classList.add ("tarjetaProducto");

        card.innerHTML = `
        <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
        <h4>${el.id}</h4>
        <h3>${el.nombre}</h3>
        <p><b>PRECIO: ${el.precio}</b></p>
        </div>
        `;

        const buttonQuitar =   document.createElement("button");
        buttonQuitar.innerText = "QUITAR DEL CARRITO";
        buttonQuitar.classList.add  ("btn","btn-danger");

       

        buttonQuitar.addEventListener("click",()=>{
            localStorage.removeItem("Carrito", el );
        })

        card.append(buttonQuitar);
        app.append(card);
    })

        //let cards = document.createElement("div");
        //.classList.add("card","container");        
}

ProductosCarrito ();