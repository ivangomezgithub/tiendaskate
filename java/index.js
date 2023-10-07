//PREGUNTA EDAD
let edad = prompt ("cual es tu edad");

//sentencia mayor o menor de edad
if (edad <= 18) {
    alert("Eres menor de edad")
    
}
else {
    alert("Eres un Anciano")
};

alert("Para poder ver nuestros productos debes ingresar Tu nombre de usuario y tu contraseña")


//PREGUNTA USUARIO
let nombreUsu = prompt  ("Cual es tu Usuario");
//PREGUNTA CONTRASEÑA
let contraseñaUsu = prompt  ("Cual es tu contraseña");

const arrayProductos = [];

import {productos,productosIniciales} from "./clases.js";

productosIniciales (arrayProductos);

const arrayCarrito= [];

console.log(arrayProductos)





//buscar producto
let productoEncontrado = [];

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


export function renderizarProductos () {

    let app = document.getElementById("app");
    const tituloProdu = document.getElementById("tituloProductos")
    let tituloProductos = document.createElement("h3");
    tituloProductos.innerText = "PRODUCTOS SKATE PARCHAO";


    arrayProductos.forEach ((el) => {

        let card = document.createElement("div");
        card.classList.add ("tarjetaProducto");

        card.innerHTML = `
        <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
        <h4>${el.id}</h4>
        <h3>${el.nombre}</h3>
        <p><b>PRECIO: ${el.precio}</b></p>
        </div>
        `;

        const buttonAgregar =   document.createElement("button");
        buttonAgregar.innerText = "Agregar a Carrito";
        buttonAgregar.classList.add  ("btn","btn-primary");

       

        buttonAgregar.addEventListener("click",()=>{
            arrayCarrito.push(el);
            localStorage.setItem("Carrito",JSON.stringify(arrayCarrito));
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

    
    tituloProdu.append(tituloProductos)

        //let cards = document.createElement("div");
        //.classList.add("card","container");        
}


//condicion si nombre de usuario es Ivan & contraseña Admin =
if (nombreUsu === "Ivan" & contraseñaUsu === "Admin") {

    alert ("Bienvenido ivan");


// function mostrar por categoria - mostrarPorCategoria.El  - El tipo de elemento a mostrar
const mostrarPorCategoria = (tipo) =>{
    const filtro = arrayProductos.filter((el) => el.tipo === tipo);
        let mensajeAmostrar = "";
    filtro.forEach ((el) =>{
        mensajeAmostrar += `\nEl producto elegido es: ${el.id} \n y su precio es: ${el.precio} \nsu categoria es: ${el.tipo}`;
    })
    alert(mensajeAmostrar);
};
const fin = 4;

//funcion mostrar hab por categoria
const verPorCategoria = () => {
    
    let opcion = parseInt(prompt("Digita el #Numero la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita el #4"));


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
            alert("ingreso una opcion invalida")
            break;
    }
    opcion = parseInt(prompt("Digita el #Numero de la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita el #4"));
}

}

verPorCategoria();


renderizarProductos ();



}

else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu Nombre de Usuario y contraseña no son correctos!',
        //footer: '<a href="">Voy a Revisarlo?</a>'
      });
}


//BANNER MOVIMIENTO MOUSEY
function bannerMouse() {
    
    const banner = document.getElementById ("bannerAnim");
    banner.textContent = ("holamundo");
    banner.classList.add ("banner");
    ;
    
    window.addEventListener("mousemove", (e) => {
            let yPos = e.clientY;
            let posDiv = parseInt((yPos) / 8);
    
            const pantallaDiv = parseInt( yPos / (screen.width / 100));
    
        banner.innerHTML =`
        <img src="/images/videoskate/theartteam Capa ${posDiv}.jpg" height= "300px">
        `
        
    });
    }
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















