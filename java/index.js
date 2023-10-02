
let edad = prompt ("cual es tu edad");
let nombreUsu = prompt  ("cual es tu nombre");


alert("Hello "+ nombreUsu);

//sentencia mayor o menor de edad

if (edad <= 18) {
    alert("eres menor de edad")
    
}
else {
    alert("eres mayor de edad")
};


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


confirm ("eres el mejor");


const arrayProductos = [];

class productos {
    constructor (id, nombre, descripcion, precio, img, tipo) {
        this.id= id,
        this.nombre= nombre,
        this.descripcion= descripcion,
        this.precio= precio,
        this.img= img,
        this.tipo = tipo;
    }
}

function productosIniciales (arrayProductos) {

//PRECIOS HABS OBJ
const precios = {
    finger: 480000,
    dados: 650000,
    impresion: 980000,

};  
    
//arrray tipos de Productos
let tipo = ["finger", "dados", "impresion", "otros"];
  

const finger = new productos ("001", "FINGER BOARD", "Finger para una persona de plastico de maiz", precios.finger, "finger.jpg", tipo[0], )
arrayProductos.push(finger);
const dados = new productos ("002", "DADOS SKATE", "Ideal para jugar skate entre amigos", precios.dados, "dados.jpg", tipo[1], )
arrayProductos.push(dados);
const impresion = new productos ("003", "IMPRESION 3D", "Todo tipo de productos en impresion 3d", precios.impresion, "impresion.jpg", tipo[2] )
arrayProductos.push(impresion);
const litofania = new productos ("004", "LITOFANIA ", "Impresion en 3d de fotos con luz", precios.impresion, "impresion.jpg", tipo[2] )
arrayProductos.push(litofania);

};


productosIniciales (arrayProductos);

console.log(arrayProductos)

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
    
    let opcion = parseInt(prompt("Digita la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita 4 o fin"));


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
    opcion = parseInt(prompt("Digita la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita 4 o fin"));
}

}

verPorCategoria();



let app = document.getElementById("app");



function renderizarProductos () {

    arrayProductos.forEach ((el) => {

        let card = document.createElement("div");

        card.innerHTML = `
        <div class="container" div id="card">
        <img src="../images/productos/${el.img}" alt="${el.descripcion}" style="width:50%">
        <h2>${el.id}</h2>
        <h3>${el.nombre}</h3>
        <p><b>${el.precio}</b></p>
        </div>
        `;

        const buttonAgregar =   document.createElement("button");
        buttonAgregar.innerText = "Agregar a Carrito";
        buttonAgregar.classList.add  ("btn","btn-primary");

        buttonAgregar.addEventListener("click",()=>{
            arrayCarrito.push(el);
            localStorage.setItem("Carrito",JSON.stringify(arrayCarrito));
        })

        card.append(buttonAgregar);
        app.append(card);
    })

        //let cards = document.createElement("div");
        //.classList.add("card","container");

    
        
        
}

renderizarProductos ();










