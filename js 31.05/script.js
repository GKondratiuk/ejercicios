/* Crear un Ecommerce

Generar una lista de productos (almenos 5 ) con los campos precio, nombre, categoria, stock

Generar una funcion llamada renderizarLista que recibira un array y devolvera un string en el sig formato
`
Lista de productos disponibles: \n
1- nombre primer producto \n
2- nombre segundo producto \n
3- ...
`


Generar un array vacio llamado carrito

Solicitar al usuario que escriba "SI" si desea comprar
En caso de escribir SI se solicitara el numero del producto de la sig lista  (usar la funcion renderizar lista)
Una vez obtengamos el numero, buscar el producto en el array, y preguntar cuanta cantidad se desea comprar, si la cantidad supera el stock disponible de ese producto decir por alerta 'No tenemos el suficiente stock'
Si no, se procedera agregar el producto con un nuevo campo llamado cantidad (con la cantidad comprada ) al array carrito

Se volvera a preguntar si desea comprar para repetir el proceso
*/

const ListaDeProductos = [
    {
        nombre: 'harina',
        precio: 200,
        cateogoria: 'granos',
        stock: 100,
},
    {
        nombre: 'yerba',
        precio: 500,
        cateogoria: 'hierbas',
        stock: 250,
},
    {
        nombre: 'mermelada',
        precio: 250,
        categoria: 'lacteos',
        stock: 300,
    },
    {
        nombre: 'yogurt',
        precio: 250,
        categoria: 'lacteos',
        stock: 300,
    },
    {
    nombre: 'arroz',
        precio: 250,
        categoria: 'alimentos no derecederos',
        stock: 300,
    },
];

