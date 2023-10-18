

export class productos {
    constructor (id, nombre, descripcion, precio, img, tipo) {
        this.id= id,
        this.nombre= nombre,
        this.descripcion= descripcion,
        this.precio= precio,
        this.img= img,
        this.tipo = tipo;
    }
}

export function productosIniciales (arrayProductos) {

// CONSTATE LOCAL DENTRO DE LA FUNCION PRECIOS HABS OBJ
const precios = {
    finger: 480000,
    dados: 650000,
    impresion: 980000,

};



//arrray tipos de Productos
let tipo = ["finger", "dados", "impresion", "otros"];
  

//AGREGAR NUEVOS PRODUCTOS
const finger = new productos ("001", "FINGER BOARD", "Finger para una persona de plastico de maiz", precios.finger, "finger.jpg", tipo[0], )
arrayProductos.push(finger);
const dados = new productos ("002", "DADOS SKATE", "Ideal para jugar skate entre amigos", precios.dados, "dados.jpg", tipo[1], )
arrayProductos.push(dados);
const dados3d = new productos ("003", "DADOS 3D", "Varias actividades de ocio", precios.dados, "dados.jpg", tipo[1], )
arrayProductos.push(dados3d);
const impresion = new productos ("004", "IMPRESION 3D", "Todo tipo de productos en impresion 3d", precios.impresion, "impresion.jpg", tipo[2] )
arrayProductos.push(impresion);
const litofania = new productos ("005", "LITOFANIA ", "Impresion en 3d de fotos con luz", precios.impresion, "impresion.jpg", tipo[2] )
arrayProductos.push(litofania);

};


