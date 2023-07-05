import React from 'react' /* siempre que traemos un componente tenemos que importar react from react por cuestión de buenas practicas*/
import './app.css'
import { Button, Input, Background, ItemListContainer, ListaDeseos } from './components'
 /*importar los archivos, recordar que los componentes importados, como este button, deben ser incoporados al ''return'' y los mismos son de autocierre.
 Los componentes deben ser importados manualmente a menos de que exista el archivos ''index.js'', en ese caso se hara automaticamente. */




const App = () => { /* Esto es un componente, las funciones desde react se llaman componentes */

/*HOOK - ENGANCHAR: actualiza, vuelve a leer cuando algo tenga que cambiar su valor*/

/*esto es un estado*/

const [contador, setContador] = React.useState(2)

//este es otro estado
const [mensaje, setMensaje] = React.useState('')

const[password, setPassword] = React.useState('')

//complemento del 1er estado
const incrementar = () =>{
  //operador cortocircuito
  //setContador (contador != 10 && contador + 1) o
  
  //operador ternario
  setContador (contador < 10 ? contador + 1 : contador)

  //if de toda la vida
//if(contador != 10){
 // setContador(contador +1)
//}
}

const disminuir = () => {

setContador (contador > 1 ? contador - 1 : contador)

}

const actualizarImput = (text) => {
  setMensaje (text) /*se re carga y se muestra en el html */
}

const palabrasProhebidas = ['1234', 'admin', '0000']
//validarPassword lo que hace es: de mis palabras prohibidas voy a verificar si alguna de las palabras que sea igual a la contraseña
const validarPassword = () => palabrasProhebidas.some((palabra) => palabra == password)

  return (

/* los fragentos se les llama a esto <> </> es de buena practica que este escrito siempre al principio y al final*/
  <>  
  <div className='contenedorContador'>
    <button className='btn' onClick={disminuir}> - </button>
    <span style={{fontSize: '25px'}}>{contador}</span>
    <button className='btn' onClick={incrementar}> + </button>
  </div>

  <div>
    <form>
    {/* Crear un input de contraseña, si el usuario escribe alguna de la sig palabras debera aprecer un error en pantalla como el siguiente

const palabrasProhebidas = ['1234', 'admin', '0000']



*/}

<input type="password" value={password} placeholder='Escriba su contraseña' onChange={(e) => setPassword(e.target.value)} />
{validarPassword() && <span style={{color: 'red', fontWeight: 500}}>Has utilizado una contraseña invalida</span>}




<br />
<br />
        <input placeholder='Escribe tu mensaje' value={mensaje} onChange={(event) => actualizarImput(event.target.value)} />
        {mensaje.length > 0 && <button>Enviar</button>} 
    </form>
  </div>
  <ItemListContainer/>
  <ListaDeseos/>
  </>

  

//el boton ''enviar'' tiene un renderizado condicional con un operador cortocircuito
  )

}



export default App