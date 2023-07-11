import React from 'react'

export const ProductCard = ({producto}) => {




  return (

    <div key = {producto.id}>
    <h2>{producto.nombre}</h2>
    <h3>Precio: {producto.precio}</h3>
    <p>Descripcion = {producto.descripcion}</p>
    <button>Ver Detalle</button>
    <hr />
  </div>



  )
}

export default ProductCard