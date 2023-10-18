//swal.fire("Para poder ver nuestros productos debes ingresar Tu nombre de usuario y tu contraseña");


const arrayProductos = [];
const arrayCarrito= [];

import {productos,productosIniciales} from "./clases.js";

productosIniciales (arrayProductos);


console.log(arrayProductos);


//buscar producto
let productoEncontrado = [];

//funcion buscar productos input
export function buscarProductos (){

    const input = document.getElementById("inPut");
const divAppBus = document.getElementById("appBusqueda")
const tilutoBusqueda = document.getElementById("tituloBusqueda")


input.addEventListener("input",(e) => {
    
    const textoBusqueda = e.target.value.toUpperCase();
    //STARTS WITH CUALQUIER LETRA DE INICIO
    productoEncontrado = arrayProductos.filter(el => el.nombre.startsWith(textoBusqueda));
    //vaciar html de appBusqueda cada cambio de letra en el buscador
    divAppBus.innerHTML = "";

    console.log(productoEncontrado)

    tilutoBusqueda.innerHTML ="";

});



input.addEventListener("keypress",(event)=>{
   (event.key === "Enter" && productoEncontrado) && console.log("el producto es:",productoEncontrado) 
   divAppBus.innerHTML = "";

   tilutoBusqueda.innerHTML= `
   <h3>PRODUCTOS BUSCADOS</h3>
   `;

   productoEncontrado.forEach ((el) => {

    let busqueda = document.createElement("div");
    busqueda.classList.add ("tarjetaProducto");

       busqueda.innerHTML = `
       <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
       <h4>${el.id}</h4>
       <h3>${el.nombre}</h3>
       <p><b>PRECIO: ${el.precio}</b></p>
       </div>
       `;
   
       
   divAppBus.append(busqueda);
   })

});
}
buscarProductos();



//funciion agregar a local storage
export const guardarLocal = () => {
    
    localStorage.setItem("Carrito",JSON.stringify(arrayCarrito));
}


export function renderizarProductos () {

    let app = document.getElementById("app");
    const tituloProdu = document.getElementById("tituloProductos");
    tituloProdu.innerHTML=`<h3>PRODUCTOS SKATE PARCHAO</h3>`;


    arrayProductos.forEach ((el) => {

        let card = document.createElement("div");
        card.classList.add ("tarjetaProducto");

        card.innerHTML = `
        <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
        <h4>${el.id}</h4>
        <h3>${el.nombre}</h3>
        <p class="precio"><strong>$ ${el.precio}</strong></p>
        </div>
        
        `;

        const buttonAgregar =   document.createElement("button");
        buttonAgregar.innerHTML = `<p>AGREGAR A CARRITO</p>`;
        buttonAgregar.classList.add  ("botonAgregar");

       

        buttonAgregar.addEventListener("click",()=>{

            arrayCarrito.push(el);
            guardarLocal();



            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'TU PRODUCTO HA SIDO AGREGADO',
                showConfirmButton: false,
                timer: 1000,
              });
        })
        card.append(buttonAgregar);
        app.append(card);
    })
};

renderizarProductos();


// function mostrar por categoria - mostrarPorCategoria.El  - El tipo de elemento a mostrar
const mostrarPorCategoria = (tipo) =>{
    const filtro = arrayProductos.filter((el) => el.tipo === tipo);
        let mensajeAmostrar = "";
    filtro.forEach ((el) =>{
        mensajeAmostrar += `\nEl producto elegido es: ${el.id} \n y su precio es: ${el.precio} \nsu categoria es: ${el.tipo}`;
    })

    Swal.fire(mensajeAmostrar);

};

const fin = 4;

//funcion mostrar hab por categoria
const preguntarCategoria = () => {
    
    let opcion = parseInt(prompt("Digita el #Numero la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita el #4"));

    
//control de flujo
while (opcion != fin) {
    switch (opcion) {
        case 1:
            mostrarPorCategoria("finger")
            break;
        case 2:
            mostrarPorCategoria("dados")
            break;
        case 3:
            mostrarPorCategoria("impresion")
            break;
        default:
            Swal.fire("Ingreso una opcion invalida")
            break;
    }
    opcion = parseInt(prompt("Digita el #Numero de la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita el #4"));
}

};


//PREGUNTA USUARIO

//let nombreUsu = prompt  ("Cual es tu Usuario");

//if (nombreUsu === "") {
//    Swal.fire ("Ingresa un nombre de usuario")
//};

//PREGUNTA CONTRASEÑA

//let contraseñaUsu = prompt  ("Cual es tu contraseña");

//if (contraseñaUsu === "") {
//    Swal.fire ("Ingresa una Contraseña")
//};


//registro
export function registro (){
//si condicion
if (nombreUsu === "Ivan" & contraseñaUsu === "Admin") {
    Swal.fire("Bienvenido ivan");
    preguntarCategoria();
}
else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu Nombre de Usuario y contraseña no son correctos!',
        //footer: '<a href="">Voy a Revisarlo?</a>'
      });
};
};
//registro ();


//BANNER MOVIMIENTO MOUSEY
function bannerMouse() {
    
    const banner = document.getElementById ("bannerAnim");
    banner.textContent = ("holamundo");
    banner.classList.add ("banner");
    ;
    
    window.addEventListener("mousemove", (e) => {
            let yPos = e.clientY;
            let posDiv = parseInt((yPos) / 8);
    
    
        banner.innerHTML =`
        <img src="/images/videoskate/theartteam Capa ${posDiv}.jpg" height= "300px">
        `
        
    });
};
bannerMouse ();
//

//BUCLE entrega anterior
//for (let index = 0; index < edad; index++) {
//    console.log (index)
//    
//};


//calculadora entrega anterior
//let resultado = 0;
//function calculadora(num1, num2, op) {
//   if (op == "*") {
//    return num1 * num2;
//   }
//   else if (op == "+") {
//    return num1 + num2;
//   }
//   else if (op == "-") {
//    return num1 - num2;
//   }
//   else if (op == "/") {
//    return num1 / num2;
//   };
//}





//activar la calculadora entrega anterior
//alert ("A continuación digitaras un numero - después una operación y el segundo numero a operar")
//let num1 = parseInt(prompt("Digita el Primer numero"))
//let op =(prompt("Digita la Op"))
//let num2 = parseInt(prompt("Digita el Segundo numero"))
//alert("hola " + nombreUsu + " " + "este es el resultado de la calculadora " + (calculadora(num1,num2,op)));















