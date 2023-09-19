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








class producto {
    constructor (id, nombre, descripcion, precio, img, tipo) {
        this.id= id,
        this.nombre= nombre,
        this.descripcion= descripcion,
        this.precio= precio,
        this.img= img,
        this.tipo = tipo;
    }
}

const arrayProductos = [];

function productosIniciales (arrayProductos) {


    //PRECIOS HABS OBJ
    const precios = {
        finger: 480000,
        dados: 650000,
        impresion: 980000,
    
    };
        
    //arrray tipos de Productos
    let tipo = ["finger", "dados", "impresion", "otros"];
      
    
    const finger = new producto ("001", "FINGER BOARD", "finger para una persona de plastico de maiz", precios.finguer, "finger.jpg", tipo[0], )
    arrayProductos.push(finger);
    const dados = new producto ("002", "DADOS SKATE", "ideal para jugar skate entre amigos", precios.dados, "dados.jpg", tipo[1], )
    arrayProductos.push(dados);
    const impresion = new producto ("003", "IMPRESION 3D", "todo tipo de productos en impresion 3d", precios.impresion, "impresion.jpg", tipo[2] )
    arrayProductos.push(impresion);

    }






let tipo = ["finger", "dados", "impresion", "otros"];


const fin = 4;

//funcion mostrar hab
const verProductos = () => {
    let opcion;
    opcion = parseInt(prompt("digita la categoria que deseas ver \n 1 finger \n 2 dados \n 3 impresion \n  de lo contrario digita fin"));
    





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
    opcion = parseInt(prompt("digita la categoria que deseas ver \n finger \n dados \n impresion \n  de lo contrario digita fin"));
}
}



verProductos();

const mostrarPorCategoria = (tipo) =>{
    const filtro = arrayProductos.filter((el) => el.tipo === tipo);
    let mensajeAmostrar = "";
    filtro.forEach ((el) =>{
        mensajeAmostrar += `\nEl producto elegido es: ${el.id} \n y su precio es: ${el.precio} \nsu categoria es: ${el.tipo}`;
    })
    alert(mensajeAmostrar);
}