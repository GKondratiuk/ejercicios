import React from 'react'
import { Footer, Navbar, ProductCard } from '../../Components'
import { useCustomContext } from '../../ContextManager/ContextProvider'




export const HomePage = () => {
    const {products} = useCustomContext()
  return (
    <div>

<div>
  <Navbar/>
</div>
 <div>
        {products.map(producto =>(
        <ProductCard producto={producto} key={producto.id}/>
        ))}
  </div>
  <div>
    <Footer/>
  </div>


    </div>
  )
}

export default HomePage