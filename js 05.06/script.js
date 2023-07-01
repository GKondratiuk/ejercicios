console.dir(document)

const containterHTML = document.querySelector("#container")
const containerHTML = document.querySelector('#container')


const usuarios = [
    {
        marca: 'suzuki',
        modelo: 'gixxer',
        precio: '$1.000.000',
        cilindrada: '150cc'
    },
  
]


usuarios.forEach((usuario) =>{
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${usuario.marca} ${usuario.modelo}</h2>
        <b>cilindrada: </b>${usuario.cilindrada} <br>
            <b>precio:</b>${usuario.precio} <br>
            <br>
            <button>Ver Detalle</button>
        <hr>
    </div>`
})

usuarios.forEach((usuario) =>{
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${usuario.marca} ${usuario.modelo}</h2>
        <b>cilindrada: </b>${usuario.cilindrada} <br>
            <b>precio:</b>${usuario.precio} <br>
            <br>
            <button>Ver Detalle</button>
        <hr>
    </div>`
})

