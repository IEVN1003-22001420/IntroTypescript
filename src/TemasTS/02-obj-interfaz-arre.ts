//interfaz

interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}

//objeto

const alumno:Alumno={
    nombre:"Mario",
    apellido:'Martinez',
    edad: 22,
    email: 'martinez@gmail.com'

}

console.table(alumno)

//arreglo

let mascotas=['perro', 'gato', 'conejo'];
console.log(mascotas)
//sustituye un dato dentro del arreglo
mascotas[1]='nuevo gato'
//agregas un nuevo dato en el arreglo
mascotas.push('leon')

console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(1)
tem.push('once')

console.log(tem)