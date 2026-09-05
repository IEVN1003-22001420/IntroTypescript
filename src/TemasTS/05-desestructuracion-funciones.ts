export interface Producto{
    desc:string,
    precio:number,

}

const telefono:Producto={
    desc:"Nokia A1",
    precio:1500
}
const tablet:Producto={
    desc:"IPad Air",
    precio:3500
}

function calcularISV(productos:Producto[]):number {
    let total=0
    for(const producto of productos){
        total+=producto.precio
    }
    return total*0.15
}
const articulos=[telefono,tablet]
const ISV=calcularISV(articulos)
console.log("ISV: ",ISV)

//desestructuracion de funciones

export function CalcularISV2(productos:Producto[]):[number,number] {
    let total=0
    for(const producto of productos){
        total+=producto.precio
    }
    return[total, total*0.15]
}

const[total, ISV2]=CalcularISV2(articulos);
console.log("Total: ",total);
console.log("ISV2: ",ISV2)