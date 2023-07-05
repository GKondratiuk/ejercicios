import React from 'react'

export const ItemListContainer = () => {
  const products = [
    {
        name: 'producto 1',
        precio: 300,
        id: 1 
    },

    {
        name: 'producto 2',
        precio: 450,
        id: 2 
    },

    {
        name: 'producto 3',
        precio: 720,
        id: 3 
    },

    {
        name: 'producto 4',
        precio: 110,
        id: 4 
    },
    
  ]
  
  
    return (
    <div>
        {products.map(producto => (
            <div key={producto.id}> {/*esto es necesario porque el react lo necesita */}
                <h2>nombre:{producto.name}</h2>
                <h3>precio: ${producto.precio}</h3>
                <button>comprar</button>
                
                <br />
            </div>
        ))}
    </div>
  )
}
