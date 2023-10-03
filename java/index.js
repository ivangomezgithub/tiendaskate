//PREGUNTA EDAD
let edad = prompt ("cual es tu edad");

//sentencia mayor o menor de edad
if (edad <= 18) {
    alert("Eres menor de edad")
    
}
else {
    alert("Eres un Anciano")
};

alert("para poder ver nuestros productos debes ingresar Tu nombre de usuario y tu contraseña")

//PREGUNTA USUARIO
let nombreUsu = prompt  ("cual es tu nombre");
//PREGUNTA CONTRASEÑA
let contraseñaUsu = prompt  ("cual es tu contraseña");


confirm ("eres el mejor");


const arrayProductos = [];

import {productos,productosIniciales} from "./clases.js";


productosIniciales (arrayProductos);

const arrayCarrito= [];

console.log(arrayProductos)



//condicion si nombre de usuario es Ivan & contraseña Admin =
if (nombreUsu === "Ivan" & contraseñaUsu === "Admin") {
    console.log ("Bienvenido ivan")

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



let app = document.getElementById("app");

const tituloProdu = document.getElementById("tituloProductos")

function renderizarProductos () {

    
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
                timer: 2000,
              });
        })
        card.append(buttonAgregar);
        app.append(card);
    })

    
    tituloProdu.append(tituloProductos)

        //let cards = document.createElement("div");
        //.classList.add("card","container");        
}

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















