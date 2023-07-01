//array

// let frutas = [  - ARRAY COMUN
//     'banana', 
//     'pera', 
//     'manzana'
// ];
// console.log (frutas)

// let frutas = {          - ARRAY ASOCIATIVO
//     nombre: 'banana',
//     precio: 200,
//     stock: 125,
//     id: 01,
// }
// console.log(frutas['nombre'])

// let nombre = frutas ['nombre'];
// let precio = frutas ['precio'];

// let frase = `me queria comprar una ${nombre}, pero el precio ${precio} me parecio muy caro, asi que la deje `

// console.log(frase)



// function saludar(){
//     var nombre = prompt('como es tu nombre ? ');
//     if (nombre == 'guillermo'){
//         console.log('puede pasar')
//     }
//     else if(nombre == 'gaby'){
//         console.log('diga contraseña')
//     }
//     else{
//         console.log ('no puede pasar')
//     }
// }

// saludar()
// saludar()


// function saludar() {
// alert('hola');
// return 'la funcion se está ejecutando'

// }

// let saludo = saludar ()
// document.write(saludo)

//FUNCIONES - PARAMETROS//


// function saludar(nombre){
//     let frase =`¡hola ${nombre}! ¿como estas?`
//    document.write(frase)
// }

// saludar('pedro')


// const saludar = function(nombre){
//     let frase = `¡hola ${nombre}! ¿como estas?`
//     document.write(frase)
// } 
// saludar('pedro')

const saludar = (nombre)=>{
    let frase = `¡Hola ${nombre}! ¿como estas ?`
    document.write(frase)
}
saludar('pedro')