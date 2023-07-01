//BUCLE FOR

//0) imprima los numeros del 10 al 1



// 1)Imprime los números del 1 al 10



// 2)Imprime los números pares del 2 al 20



// 3)Imprime los números impares del 1 al 19


// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5



// 6)Imprime los números del 1 al 10, pero salta el 5





//BUCLE WHILE

// let decision = prompt ('ingrese Si para continuar')
// while(decision === 'SI'){
//     alert ('el programa se esta ejecuantod')
//     decision = prompt ('ingrese Si para continuar')
// }


/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)
Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora
 */


let decision = (prompt ('escriba SI, si desea usar la calculadora'))
while(decision === 'SI') {
let operacion = (prompt ('solicite operacion valida'))
let n1 = Number(prompt ('coloque el primer numero'))
let n2 = Number(prompt ('coloque el segundo numero'))

if (operacion === '+'){
    alert('El resultado de ' + n1 + '+' + n2 + ' es: ' + (n1 + n2))
} 
else if (operacion === '-'){
    alert('El resultado de ' + n1 + '-' + n2 + ' es: ' + (n1 - n2))
}
else if (operacion === '/'){
    alert('El resultado de ' + n1 + '/' + n2 + ' es: ' + (n1 / n2))
}  
else if (operacion === '*'){
    alert('El resultado de ' + n1 + '/' + n2 + ' es: ' + (n1 * n2))
}  
else{
    alert ('alguno de los caracteres que colocó no es valido')
}
decision = (prompt ('escriba SI, si desea usar la calculadora'))
}