// const alumnos = [
//     {
//         nombre:'maria',
//         apellido: 'juana'
//     }, 
//     {
//         nombre: 'lucas',
//         apellido: 'Suarez'
//     },
//     {
//         nombre: 'Ivana',
//         apellido: 'suarez'
//     }
// ]

// for(const alumno of alumnos){
//     console.log(`Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
// }




/* Recorrer el array y por cada elemento decir: USAR TEMPLATE STRINGS */
/* Hola me llamo nombre apellido */






//objeto literal 

// let nombreUsuario = 'lucas'           //incorrecto
// let apellidoUsuario = 'suarez'
// let edadUsuario = 30

// const usuario = {        //correcto
//     nombre: 'lucas',
//     apellido: 'suarez',
//     edad: 30,
//     'pelo largo':false,
//     'tieneAmigos': true,
//     amigos: [
//         'pepe'
//         'juana'
//     ]
    
// }

// console.log(usuario.nombre)
// console.log(usuario)

// console.log(
//     `hola ${usuario.nombre} ${usuario.apellido} cuantos años tenes?
//     ${usuario.nombre}: hola, tengo ${usuario.edad}
//     `
//     )


/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.//





4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']

32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

 */
/* Sirve para recorrer un array */
// alumnos.forEach((alumno, index, array)=> {
//     console.log(`${index +1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`)

// })

// /* Sirve para recorrer el array y generar un nuevo array en base al recorrido */
// const nombresCompletos = alumnos.map((alumno) => {
//     return `${alumno.nombre} ${alumno.apellido}`
// })

// 1)
// Dado un array de números, escribir una función que calcule la suma de todos los números del array.//

const numeros = [1, 2 ,3];
const sumaDeNumeros = numeros.map((numeros) => {
         return `$`
     })
