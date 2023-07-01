import React from 'react' /* siempre que traemos un componente tenemos que importar react from react por cuestión de buenas practicas*/
import './app.css'
import { Button, Input, Background } from './components'
 /*importar los archivos, recordar que los componentes importados, como este button, deben ser incoporados al ''return'' y los mismos son de autocierre.
 Los componentes deben ser importados manualmente a menos de que exista el archivos ''index.js'', en ese caso se hara automaticamente. */




const App = () => { /* Esto es un componente, las funciones desde react se llaman componentes */

const saludar = () => {
  alert('hola ')
  }
  const despedida = () => {
    alert('adios ')
  }

  return (

/* los fragentos se les llama a esto <> </> es de buena practica que este escrito siempre al principio y al final*/
  <>  

    <div className='titulo'>
    <Background>
    <h1>Hola desde React</h1>
    </Background>
    
    </div>
    

    <div>
  <Button funcion={saludar}/>
  <Button funcion={despedida} type='btn-dark'/>
  <Input/>
    </div>
  </>

  )

}



export default App