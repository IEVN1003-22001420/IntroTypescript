import {type Producto, CalcularISV2} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[ 
    {
        desc:"Telefono 1",
        precio:10000
    },
    {
        desc:"Telefono 2",
        precio:20000
    },
    {
        desc:"Telefono 3",
        precio:36000
    }

]
const[total, isv]=CalcularISV2(carrito);
console.log("Total carrito: ",total);
console.log("ISV carrito: ",isv)