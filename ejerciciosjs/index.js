/*comentarios 
de varias 
lineas
se coloca de esta manera - NODEMON SE PARA DE EJECUTAR CON CTRL + C Y SE VUELVE A ACTICAR NODEMON .INDEX.JS*/
//comentario de una linea, se coloca de esta otra manera//

/*ESTAMOS VIENDO VARIABLES, GUARDAN INFORMACION Y TAMBIEN PUEDE CAMBIAR DE VALOR* - LOS DATOS INGRESADOS EN ''LETRAS'' SON LLAMADOS ''STRING'' Y DEBEN INGRESARSE CON COMILLAS*/

console.log(`archivo externo`); //console.log - imprime los datos//

var nombre; //declaracion variable//
var apellido;//declaracion variable//

nombre = 'pepe' //asignacion de varible//
apellido = 'perez'; //asignacion de variable//

var provincia = 'salta'; 
//declaracion y asignacion de variables//
console.log(provincia);

let capital = 'buenosa ires' //otro tipo de viarble//
console.log(capital);

capital = 'brasilia';
console.log(capital);

const dni = 123456789 //variable que no cambia de valor//

console.log(dni); 

console.log('===============================')
console.log('tipos de datos')
console.log('===============================')
/* TIPOS DE DATOS*/
/*var, let o const  
variable tipo texto 
variable tipo numerico / operadores matematicos * - + / - % /
booleanos verdadero o falso

*/
let uno = 500;  //asignamos informacion a la variable ''uno'' //
let dos = 1000; //asignamos informacion a la viariable ''dos''// 

let resultado = uno + dos; //asignamos a la variable el valor de la suma de las dos variables anteriores - ¿quien es resultado? la suma de uno y de dos//

console.log ('el resultado de la suma es: ' + resultado);

resultado = dos - uno; //quien es resultado ? la resta de dos menos uno

console.log ('el resultado de la resta es: ' + resultado);

console.log('=====================================');
console.log('operadores relacionales');
console.log('=====================================');
// Estos son < > <= >=  (=! igual o distinto) (== identico)  (! distnto) ­­//

resultado = uno < dos; //uno menor que dos//

console.log(resultado);

resultado = uno > dos;

console.log(resultado);

resultado = uno =! dos; 

console.log(resultado);


console.log(resultado);


console.log('=====================================');
console.log('operaciones condicionales');
console.log('=====================================');

//si algo es verdadero o falso 

let edad = 15;

if(edad >18){
console.log('podes viajar sin permiso de un mayor')} // respuesta si es verdad que tiene mas de 18//
else{console.log('NO podes viajar sin permiso de un mayor');
}  //RESPUESTA QUE ARROJA AL Si es MENOR//

console.log('=====================================');
console.log('operadores logicos');
console.log('=====================================');
//estos son: && ||  //
